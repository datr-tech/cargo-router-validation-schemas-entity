import { resourceTypeValidationSchemaDeleteResourceType } from '../../../dist';

describe('resourceTypeValidationSchemaDeleteResourceType', () => {
  describe('positive', () => {
    test('should contain the expected schema', () => {
      const expectedSchema = {
        resourceTypeId: { in: 'params', isMongoId: true, notEmpty: true },
      };

      const foundSchema = { ...resourceTypeValidationSchemaDeleteResourceType };
      expect(foundSchema).toStrictEqual(expectedSchema);
    });
  });
});
