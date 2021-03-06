/**
 * challenge-api-service-prod
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import RateQuotesRateQuotes from './RateQuotesRateQuotes';

/**
* The RateQuotes model module.
* @module model/RateQuotes
* @version 1.0
*/
export default class RateQuotes {
    /**
    * Constructs a new <code>RateQuotes</code>.
    * @alias module:model/RateQuotes
    * @class
    * @param rateQuotes {Array.<module:model/RateQuotesRateQuotes>} 
    */

    constructor(rateQuotes) {
        
        
        this['rateQuotes'] = rateQuotes;
        
    }

    /**
    * Constructs a <code>RateQuotes</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/RateQuotes} obj Optional instance to populate.
    * @return {module:model/RateQuotes} The populated <code>RateQuotes</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RateQuotes();
                        
            
            if (data.hasOwnProperty('rateQuotes')) {
                obj['rateQuotes'] = ApiClient.convertToType(data['rateQuotes'], [RateQuotesRateQuotes]);
            }
        }
        return obj;
    }

    /**
    * @member {Array.<module:model/RateQuotesRateQuotes>} rateQuotes
    */
    'rateQuotes' = undefined;




}
