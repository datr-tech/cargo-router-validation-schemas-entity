import { endpointValidationSchemaReadEndpoint } from '@app-crvse/schemas';

describe('endpointValidationSchemaReadEndpoint', () => {
  describe('positive', () => {
    test('should contain the expected schema', () => {
      const expectedSchema = {
        endpointId: { in: 'params', isMongoId: true, notEmpty: true },
      };

      const foundSchema = { ...endpointValidationSchemaReadEndpoint };
      expect(foundSchema).toStrictEqual(expectedSchema);
    });
  });
});
