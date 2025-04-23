import { resourceTypeValidationSchemaReadResourceType } from '../../../dist';

describe('resourceTypeValidationSchemaReadResourceType', () => {
  describe('positive', () => {
    test('should contain the expected schema', () => {
      const expectedSchema = {
        resourceTypeId: { in: 'params', isMongoId: true, notEmpty: true },
      };

      const foundSchema = { ...resourceTypeValidationSchemaReadResourceType };
      expect(foundSchema).toStrictEqual(expectedSchema);
    });
  });
});
