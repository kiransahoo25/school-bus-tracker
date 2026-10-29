import { db } from "../../db/pool";

export const findNearestStops = async (lat: number, lng: number) => {
  // We use the haversine formula to find distance in meters
  // 6371000 is the radius of the Earth in meters
  const query = `
    SELECT 
      s.id as stop_id, 
      s.name as stop_name, 
      r.id as route_id, 
      r.name as route_name,
      ROUND(
        6371000 * acos(
          cos(radians($1)) * cos(radians(s.lat)) * cos(radians(s.lng) - radians($2)) + 
          sin(radians($1)) * sin(radians(s.lat))
        )
      ) AS distance_meters
    FROM stops s
    JOIN routes r ON s.route_id = r.id
    ORDER BY distance_meters ASC
    LIMIT 3;
  `;

  const result = await db.query(query, [lat, lng]);
  return result.rows;
};
