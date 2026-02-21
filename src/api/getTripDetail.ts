import { supabase } from './supabaseClient';

export async function getTripDetail(tripId: number) {
  const { data: trip } = await supabase
    .from('trips')
    .select('*')
    .eq('id', tripId)
    .single();

  const { data: stats } = await supabase
    .from('trip_statistics')
    .select('*')
    .eq('trip_id', tripId)
    .single();

  const { data: images } = await supabase
    .from('trip_images')
    .select('image_url, is_cover')
    .eq('trip_id', tripId);

  let coverImage: string | null = null;
  let extraImages: string[] = [];

  if (images && images.length > 0) {
    const cover = images.find((img) => img.is_cover);
    const others = images.filter((img) => !img.is_cover);

    coverImage = cover?.image_url ?? images[0].image_url;
    extraImages = others.map((img) => img.image_url);
  }

  return {
    trip,
    stats,
    coverImage,
    extraImages,
  };
}
