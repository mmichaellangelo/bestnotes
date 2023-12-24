export function toPostgresTimestamp(date: Date) {
    return date.toISOString().replace('T', ' ').replace('Z', '');
}