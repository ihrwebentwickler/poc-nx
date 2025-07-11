/**
 * OfferService
 *
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { ListAttributeDTO } from './listAttribute.model';
import { DateAttributeDTO } from './dateAttribute.model';
import { ListAttributeRequiredDTO } from './listAttributeRequired.model';
import { IntegerAttributeDTO } from './integerAttribute.model';


/**
 * ###### Professional details ###### <u>Beruflichen Angaben</u>
 */
export interface PersonalDataProfessionalDataRequestDTO { 
    qualification: ListAttributeRequiredDTO;
    occupation: ListAttributeRequiredDTO;
    physical_job_proportion?: IntegerAttributeDTO;
    travel_job_proportion?: IntegerAttributeDTO;
    office_job_proportion?: IntegerAttributeDTO;
    employed_since?: DateAttributeDTO;
    personnel_responsibility?: IntegerAttributeDTO;
    educational_attainment?: ListAttributeDTO;
    education?: ListAttributeDTO;
    /**
     * ###### Scoring risk group ###### <u>Risikogruppe aus Scoring Service</u>
     */
    scoring_risk_group?: string;
    /**
     * ###### Scoring risk group ratio ###### <u>Risikogruppenanteil aus Scoring Service</u>
     */
    scoring_risk_group_ratio?: number;
    /**
     * ###### Scoring max pension ###### <u>maxPension aus Scoring Service</u>
     */
    max_pension?: number;
    /**
     * ###### Scoring final age ###### <u>finalAge aus Scoring Service</u>
     */
    final_age?: number;
    /**
     * ###### Scoring max entry age ###### <u>maxEntryAge aus Scoring Service</u>
     */
    max_entry_age?: number;
}

