export function toPostgresTimestamp(date: Date): string {
    return date.toISOString().replace('T', ' ').replace('Z', '');
}