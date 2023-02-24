import { registerTransforms } from '@tokens-studio/sd-transforms';
import StyleDictionary from 'style-dictionary';

registerTransforms(StyleDictionary);

const StyledDictionaryExtended = StyleDictionary.extend({
  source: ['./scripts/token.json'],
  platforms: {
    css: {
      transformGroup: 'tokens-studio',
      prefix: 'sd',
      buildPath: 'src/tokens/',
      files: [
        {
          destination: '_variables.css',
          format: 'css/variables',
        },
      ],
    },
  },
});

StyledDictionaryExtended.buildAllPlatforms();
