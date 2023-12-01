import ClassRoom from './0-classroom';

/**
 * Initializes an array of classrooms with specified sizes.
 * @returns An array of {@link ClassRoom} objects.
 */
export default function initializeRooms() {
  return [19, 20, 34].map((size) => new ClassRoom(size));
}
