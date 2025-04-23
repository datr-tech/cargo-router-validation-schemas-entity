import { resourceTypeValidationSchemaUpdateResourceType } from '@app-crvse/schemas';

describe('resourceTypeValidationSchemaUpdateResourceType', () => {
  describe('positive', () => {
    test('should contain the expected schema', () => {
      const expectedSchema = {
        adminStatusId: {
          default: 'undefined',
          in: 'body',
          isMongoId: true,
          notEmpty: false,
          optional: { values: 'undefined' },
        },
        adminUserId: {
          in: 'body',
          isMongoId: true,
          notEmpty: false,
          default: 'undefined',
          optional: { values: 'undefined' },
        },
        description: {
          default: 'undefined',
          in: 'body',
          isString: true,
          isLength: { options: { min: 1, max: 200 } },
          notEmpty: false,
          optional: { values: 'undefined' },
        },
        name: {
          in: 'body',
          isString: true,
          isLength: { options: { min: 8, max: 100 } },
          notEmpty: false,
          default: 'undefined',
          optional: { values: 'undefined' },
        },
        resourceTypeId: { in: 'params', isMongoId: true, notEmpty: true },
      };

      const foundSchema = { ...resourceTypeValidationSchemaUpdateResourceType };
      expect(foundSchema).toStrictEqual(expectedSchema);
    });
  });
});
