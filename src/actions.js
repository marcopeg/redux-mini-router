
import { NAVIGATE } from './constants';
import { normalizeUri } from './utils';

export function navigate(uri) {
    uri = normalizeUri(uri);
    window.location.hash = uri;

    return {
        type: NAVIGATE,
        payload: {
            uri,
            etag: Date.now(),
        },
    };
}
