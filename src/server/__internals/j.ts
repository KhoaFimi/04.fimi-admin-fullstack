import { Context } from 'hono'
import { Bindings } from 'hono/types'

import { Procedure } from '@/server/__internals/procedure'

const baseProcedure = new Procedure()

type MiddlewareFunction<T = {}, R = void> = (params: {
	ctx: T
	next: <B>(args: B) => Promise<B & T>
	c: Context<{ Bindings: Bindings }>
}) => Promise<R>

export const j = {
	middleware: <T = {}, R = void>(
		fn: MiddlewareFunction<T, R>
	): MiddlewareFunction<T, R> => {
		return fn
	},
	procedure: baseProcedure
}
