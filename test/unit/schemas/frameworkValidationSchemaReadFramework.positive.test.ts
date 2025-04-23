import { frameworkValidationSchemaReadFramework } from '@app-crvse/schemas';

describe('frameworkValidationSchemaReadFramework', () => {
  describe('positive', () => {
    test('should contain the expected schema', () => {
      const expectedSchema = {
        frameworkId: { in: 'params', isMongoId: true, notEmpty: true },
      };

      const foundSchema = { ...frameworkValidationSchemaReadFramework };
      expect(foundSchema).toStrictEqual(expectedSchema);
    });
  });
});
