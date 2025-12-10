export type Trip = {
  id: string;
  name: string;
  image: string;
  location: string;
  description?: string;
  mapUrl?: string;
  extraImages?: string[];
};
