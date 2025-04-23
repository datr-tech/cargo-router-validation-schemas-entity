import { serviceValidationSchemaDeleteService } from '@app-crvse/schemas';

describe('serviceValidationSchemaDeleteService', () => {
  describe('positive', () => {
    test('should contain the expected schema', () => {
      const expectedSchema = {
        serviceId: { in: 'params', isMongoId: true, notEmpty: true },
      };

      const foundSchema = { ...serviceValidationSchemaDeleteService };
      expect(foundSchema).toStrictEqual(expectedSchema);
    });
  });
});
