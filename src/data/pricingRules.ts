// tslint:disable: max-line-length

export const PricingRules = [
  {
    code: 'RRD4D32',
    description: '10% discount for orders above $1000 (pre-discount)',
    value_type: 'percentage',
    sku: null,
    value: 10,
    conditions: {
      subTotal: 999,
      minQuantity: null,
      dependentSku: null,
    },
  },
  {
    code: '44F4T11',
    description: '15% discount for orders above $1500 (pre-discount)',
    value_type: 'percentage',
    sku: null,
    value: 15,
    conditions: {
      subTotal: 1499,
      minQuantity: null,
      dependentSku: null,
    },
  },
  {
    code: 'FF9543D1',
    description: 'Reduces the docgen price to $8.99 a unit when at least 10 documents are purchased',
    value_type: 'fixed_amount',
    sku: 'docgen',
    value: 8.99,
    conditions: {
      subTotal: null,
      minQuantity: 10,
      dependentSku: null,
    },
  },
  {
    code: 'YYGWKJD',
    description: 'Reduces the form price to $89.99 a unit when at least 1 wf is purchased',
    value_type: 'fixed_amount_dependent_sku',
    sku: 'form',
    value: 89.99,
    conditions: {
      subTotal: null,
      minQuantity: null,
      dependentSku: { sku: 'wf', quantity: 1 },
    },
  },
];
