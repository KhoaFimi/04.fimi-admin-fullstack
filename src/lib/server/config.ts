import { z } from 'zod'

export const envSchema = z.object({
	NODE_ENV: z
		.union([
			z.literal('development'),
			z.literal('testing'),
			z.literal('production')
		])
		.default('development'),
	DOMAIN: z.string().default('http://localhost:3000'),
	BASE_URL: z.string().url().default('http://localhost:3000')
})

declare global {
	namespace NodeJS {
		interface ProcessEnv extends z.infer<typeof envSchema> {}
	}
}

export const config = envSchema.parse(process.env)
