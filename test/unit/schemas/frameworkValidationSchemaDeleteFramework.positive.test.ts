import { frameworkValidationSchemaDeleteFramework } from '@app-crvse/schemas';

describe('frameworkValidationSchemaDeleteFramework', () => {
  describe('positive', () => {
    test('should contain the expected schema', () => {
      const expectedSchema = {
        frameworkId: { in: 'params', isMongoId: true, notEmpty: true },
      };

      const foundSchema = { ...frameworkValidationSchemaDeleteFramework };
      expect(foundSchema).toStrictEqual(expectedSchema);
    });
  });
});
