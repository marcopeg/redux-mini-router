
export function normalizeUri(uri) {
    return uri.replace('#/', '#').replace('#', '/');
}
