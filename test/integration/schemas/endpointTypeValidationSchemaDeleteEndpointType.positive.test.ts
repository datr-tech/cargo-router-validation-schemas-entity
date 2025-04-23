import { endpointTypeValidationSchemaDeleteEndpointType } from '../../../dist';

describe('endpointTypeValidationSchemaDeleteEndpointType', () => {
  describe('positive', () => {
    test('should contain the expected schema', () => {
      const expectedSchema = {
        endpointTypeId: { in: 'params', isMongoId: true, notEmpty: true },
      };

      const foundSchema = { ...endpointTypeValidationSchemaDeleteEndpointType };
      expect(foundSchema).toStrictEqual(expectedSchema);
    });
  });
});
