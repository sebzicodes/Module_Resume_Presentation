import { Router } from 'express'
import registry from '../modules-registry.js'

const router = Router()

router.get('/', (_req, res) => {
  res.json(registry)
})

export default router
