import type { INodeProperties } from 'n8n-workflow';

export const pricingDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Pricing"
					]
				}
			},
			"options": [
				{
					"name": "Get Currencies Pricing Currencies Get",
					"value": "Get Currencies Pricing Currencies Get",
					"action": "Get list of available currencies",
					"description": "Get list of available currencies and exchange rates for token prices",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/pricing/currencies"
						}
					}
				},
				{
					"name": "Get Token Price Pricing Token Chain Id Token Addr Get",
					"value": "Get Token Price Pricing Token Chain Id Token Addr Get",
					"action": "Get single token price",
					"description": "Get the token price info for a given chain and address. Price will be null if asset is valid but price is not available",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/pricing/token/{{$parameter[\"chain_id\"]}}/{{$parameter[\"token_addr\"]}}"
						}
					}
				},
				{
					"name": "Get Chain Token Prices Pricing Token Chain Id Get",
					"value": "Get Chain Token Prices Pricing Token Chain Id Get",
					"action": "Get all chain whitelisted token prices, unless list is specified",
					"description": "Get all of the whitelisted token prices on an Odos supported chain",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/pricing/token/{{$parameter[\"chain_id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /pricing/currencies",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Pricing"
					],
					"operation": [
						"Get Currencies Pricing Currencies Get"
					]
				}
			}
		},
		{
			"displayName": "GET /pricing/token/{chain_id}/{token_addr}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Pricing"
					],
					"operation": [
						"Get Token Price Pricing Token Chain Id Token Addr Get"
					]
				}
			}
		},
		{
			"displayName": "Chain Id",
			"name": "chain_id",
			"required": true,
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Pricing"
					],
					"operation": [
						"Get Token Price Pricing Token Chain Id Token Addr Get"
					]
				}
			}
		},
		{
			"displayName": "Token Addr",
			"name": "token_addr",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Pricing"
					],
					"operation": [
						"Get Token Price Pricing Token Chain Id Token Addr Get"
					]
				}
			}
		},
		{
			"displayName": "Currency Id",
			"name": "currencyId",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "currencyId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pricing"
					],
					"operation": [
						"Get Token Price Pricing Token Chain Id Token Addr Get"
					]
				}
			}
		},
		{
			"displayName": "GET /pricing/token/{chain_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Pricing"
					],
					"operation": [
						"Get Chain Token Prices Pricing Token Chain Id Get"
					]
				}
			}
		},
		{
			"displayName": "Chain Id",
			"name": "chain_id",
			"required": true,
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"Pricing"
					],
					"operation": [
						"Get Chain Token Prices Pricing Token Chain Id Get"
					]
				}
			}
		},
		{
			"displayName": "Token Addresses",
			"name": "token_addresses",
			"default": "[]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "token_addresses",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pricing"
					],
					"operation": [
						"Get Chain Token Prices Pricing Token Chain Id Get"
					]
				}
			}
		},
		{
			"displayName": "Currency Id",
			"name": "currencyId",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "currencyId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pricing"
					],
					"operation": [
						"Get Chain Token Prices Pricing Token Chain Id Get"
					]
				}
			}
		},
];
