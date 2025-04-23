import { frameworkTypeValidationSchemaDeleteFrameworkType } from '@app-crvse/schemas';

describe('frameworkTypeValidationSchemaDeleteFrameworkType', () => {
  describe('positive', () => {
    test('should contain the expected schema', () => {
      const expectedSchema = {
        frameworkTypeId: { in: 'params', isMongoId: true, notEmpty: true },
      };

      const foundSchema = { ...frameworkTypeValidationSchemaDeleteFrameworkType };
      expect(foundSchema).toStrictEqual(expectedSchema);
    });
  });
});
