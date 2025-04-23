import { endpointTypeValidationSchemaReadEndpointType } from '@app-crvse/schemas';

describe('endpointTypeValidationSchemaReadEndpointType', () => {
  describe('positive', () => {
    test('should contain the expected schema', () => {
      const expectedSchema = {
        endpointTypeId: { in: 'params', isMongoId: true, notEmpty: true },
      };

      const foundSchema = { ...endpointTypeValidationSchemaReadEndpointType };
      expect(foundSchema).toStrictEqual(expectedSchema);
    });
  });
});
