import { resourceValidationSchemaDeleteResource } from '../../../dist';

describe('resourceValidationSchemaDeleteResource', () => {
  describe('positive', () => {
    test('should contain the expected schema', () => {
      const expectedSchema = {
        resourceId: { in: 'params', isMongoId: true, notEmpty: true },
      };

      const foundSchema = { ...resourceValidationSchemaDeleteResource };
      expect(foundSchema).toStrictEqual(expectedSchema);
    });
  });
});
