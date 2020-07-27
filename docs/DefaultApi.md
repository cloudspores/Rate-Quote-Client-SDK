# ChallengeApiServiceProd.DefaultApi

All URIs are relative to *https://ss6b2ke2ca.execute-api.us-east-1.amazonaws.com/Prod*

Method | HTTP request | Description
------------- | ------------- | -------------
[**quotesGet**](DefaultApi.md#quotesGet) | **GET** /quotes | Request rate quotes

<a name="quotesGet"></a>
# **quotesGet**
> RateQuotes quotesGet(loanSize, creditScore, propertyType, occupancy)

Request rate quotes

### Example
```javascript
import ChallengeApiServiceProd from 'challenge_api_service_prod';
let defaultClient = ChallengeApiServiceProd.ApiClient.instance;

// Configure API key authorization: OUAuth
let OUAuth = defaultClient.authentications['OUAuth'];
OUAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//OUAuth.apiKeyPrefix = 'Token';

let apiInstance = new ChallengeApiServiceProd.DefaultApi();
let loanSize = 1.2; // Number | Loan size in dollars
let creditScore = 56; // Number | The borrowers credit score
let propertyType = "propertyType_example"; // String | The type of property for which a mortgage is being requested
let occupancy = "occupancy_example"; // String | How the borrower will use the property

apiInstance.quotesGet(loanSize, creditScore, propertyType, occupancy).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **loanSize** | **Number**| Loan size in dollars | 
 **creditScore** | **Number**| The borrowers credit score | 
 **propertyType** | **String**| The type of property for which a mortgage is being requested | 
 **occupancy** | **String**| How the borrower will use the property | 

### Return type

[**RateQuotes**](RateQuotes.md)

### Authorization

[OUAuth](../README.md#OUAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

