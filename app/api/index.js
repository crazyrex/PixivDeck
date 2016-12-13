// @flow
import type {Endpoint, Params} from '../types/column'
import Pixiv, {normalizeIllusts, parseUrl} from './pixiv'

type FetchResponse = {
	response: Object,
	params: ?Params
};

class Api {
	static login(username, password) {
		return Promise.resolve().then(() => Pixiv.login(username, password))
	}

	static async fetch(endpoint: Endpoint, opts: ?Params): Promise<FetchResponse> {
		const res = await Pixiv.fetch(endpoint, {params: opts})

		const nextParams: ?Params = res.nextUrl ? parseUrl(res.nextUrl) : null

		return {
			response: normalizeIllusts(res),
			params: nextParams,
		}
	}

	static async illustBookmarkAdd(id: number, isPublic: bool = true): Promise<Object> {
		const restrict = isPublic ? 'public' : 'private'
		return await Pixiv.illustBookmarkAdd(id, {restrict})
	}
}

export default Api