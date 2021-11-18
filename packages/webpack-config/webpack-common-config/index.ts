import developmentConfig from './webpack.development'
import productionConfig from './webpack.production'

/**
 * @param mode
 */
export default function getConfig(mode: 'development' | 'production') {
  if (mode === 'production') return productionConfig
  return developmentConfig
}
