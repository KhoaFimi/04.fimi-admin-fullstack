import { z } from 'zod'

import { router } from '@/server/__internals/router'
import { publicProcedure } from '@/server/procedures'

export const userRouter = router({
	hello: publicProcedure
		.input(
			z.object({
				name: z.string().catch('John')
			})
		)
		.query(async ({ c, input }) => {
			return c.superjson({
				message: `Hello ${input.name}`,
				timeStamp: Date.now()
			})
		})
})
