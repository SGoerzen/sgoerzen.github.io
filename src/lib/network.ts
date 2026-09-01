export type NetworkSpecialist = {
  name: string
  role: string
  description: string
  specialties: string[]
  website?: string
  image?: string
}

// Personen erst nach ihrer Zustimmung mit Namen, Profil und optionalem Foto ergänzen.
export const NETWORK_SPECIALISTS: NetworkSpecialist[] = []
