import { resourceValidationSchemaReadResource } from '../../../dist';

describe('resourceValidationSchemaReadResource', () => {
  describe('positive', () => {
    test('should contain the expected schema', () => {
      const expectedSchema = {
        resourceId: { in: 'params', isMongoId: true, notEmpty: true },
      };

      const foundSchema = { ...resourceValidationSchemaReadResource };
      expect(foundSchema).toStrictEqual(expectedSchema);
    });
  });
});
