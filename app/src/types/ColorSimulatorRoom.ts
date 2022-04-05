interface ColorSimulatorRoomPartItem {
  id: number | null,
  color_simulator_room_part: number| null,
  order_id: number | null,
  option: boolean,
  model_room: boolean,
  color: string | null,
  part_image: string | null,
  part_thumbnail: string | null,
  color_image: string | null,
  color_thumbnail: string | null,
}

interface ColorSimulatorRoomPart {
  id: number | null,
  color_simulator_room: number| null,
  order_id: number | null,
  name: string | null,
  room_part_items?: ColorSimulatorRoomPartItem[]
}

interface ColorSimulatorRoom {
  id: number | null,
  project: number | null,
  order_id: number | null,
  name: string | null,
  image: string | null,
  thumbnail: string | null,
  room_parts?: ColorSimulatorRoomPart[],
  color_simulator_rooms?: ColorSimulatorRoomPart[]
}
