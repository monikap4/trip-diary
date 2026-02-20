import { supabase } from './supabaseClient';

type CreateTripPayload = {
  name: string;
  region: string;
  country: string;
  description: string;
  mapId?: string;
  distance?: string;
  elevation?: string;
  summits?: string;
  images: File[];
};

export async function createTrip({
  name,
  region,
  country,
  description,
  mapId,
  distance,
  elevation,
  summits,
  images,
}: CreateTripPayload) {
  const { data: trip, error: tripError } = await supabase
    .from('trips')
    .insert([
      {
        name,
        location: `${region}, ${country}`,
        description,
        map_id: mapId || null,
      },
    ])
    .select()
    .single();

  if (tripError) {
    throw new Error('Nepodařilo se uložit trasu');
  }

  const { error: statsError } = await supabase.from('trip_statistics').insert([
    {
      trip_id: trip.id,
      distance: Number(distance) || 0,
      elevation: Number(elevation) || 0,
      summits: Number(summits) || 0,
      highest_point: 0,
    },
  ]);

  if (statsError) {
    throw new Error('Nepodařilo se uložit statistiky');
  }

  let isFirst = true;

  for (const file of images) {
    const filePath = `${trip.id}/${Date.now()}-${file.name}`;

    const { error: uploadError } = await supabase.storage
      .from('images')
      .upload(filePath, file);

    if (uploadError) {
      continue;
    }

    const { publicUrl } = supabase.storage
      .from('images')
      .getPublicUrl(filePath).data;

    await supabase.from('trip_images').insert([
      {
        trip_id: trip.id,
        image_url: publicUrl,
        is_cover: isFirst,
      },
    ]);

    isFirst = false;
  }

  return trip;
}
