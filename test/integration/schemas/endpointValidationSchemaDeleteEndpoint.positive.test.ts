import { endpointValidationSchemaDeleteEndpoint } from '../../../dist';

describe('endpointValidationSchemaDeleteEndpoint', () => {
  describe('positive', () => {
    test('should contain the expected schema', () => {
      const expectedSchema = {
        endpointId: { in: 'params', isMongoId: true, notEmpty: true },
      };

      const foundSchema = { ...endpointValidationSchemaDeleteEndpoint };
      expect(foundSchema).toStrictEqual(expectedSchema);
    });
  });
});
