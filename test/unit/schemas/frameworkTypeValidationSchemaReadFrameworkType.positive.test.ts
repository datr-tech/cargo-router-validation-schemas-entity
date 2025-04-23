import { frameworkTypeValidationSchemaReadFrameworkType } from '@app-crvse/schemas';

describe('frameworkTypeValidationSchemaReadFrameworkType', () => {
  describe('positive', () => {
    test('should contain the expected schema', () => {
      const expectedSchema = {
        frameworkTypeId: { in: 'params', isMongoId: true, notEmpty: true },
      };

      const foundSchema = { ...frameworkTypeValidationSchemaReadFrameworkType };
      expect(foundSchema).toStrictEqual(expectedSchema);
    });
  });
});
