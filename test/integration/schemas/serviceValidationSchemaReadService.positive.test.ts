import { serviceValidationSchemaReadService } from '../../../dist';

describe('serviceValidationSchemaReadService', () => {
  describe('positive', () => {
    test('should contain the expected schema', () => {
      const expectedSchema = {
        serviceId: { in: 'params', isMongoId: true, notEmpty: true },
      };

      const foundSchema = { ...serviceValidationSchemaReadService };
      expect(foundSchema).toStrictEqual(expectedSchema);
    });
  });
});
