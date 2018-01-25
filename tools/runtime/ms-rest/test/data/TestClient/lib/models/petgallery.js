/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 * 
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * @class
 * Initializes a new instance of the PetGallery class.
 * @constructor
 * @member {number} [id]
 * 
 * @member {string} [name]
 * 
 */
class PetGallery {
  constructor() {
  }

  /**
   * Defines the metadata of PetGallery
   *
   * @returns {object} metadata of PetGallery
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'PetGallery',
      type: {
        name: 'Composite',
        className: 'PetGallery',
        modelProperties: {
          id: {
            required: false,
            serializedName: 'id',
            type: {
              name: 'Number'
            }
          },
          name: {
            required: false,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          pets: {
            required: false,
            serializedName: 'pets',
            type: {
              name: 'Sequence',
              element: {
                required: false,
                serializedName: 'petElementType',
                type: {
                  name: 'Composite',
                  polymorphicDiscriminator: 'pet.type',
                  uberParent: 'Pet',
                  className: 'Pet'
                }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = PetGallery;