import type { INodeProperties } from 'n8n-workflow';

export const informationDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Information"
					]
				}
			},
			"options": [
				{
					"name": "Get Chain Ids Info Chains Get",
					"value": "Get Chain Ids Info Chains Get",
					"action": "Supported Blockchains",
					"description": "All Chain IDs supported by Odos.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/info/chains"
						}
					}
				},
				{
					"name": "Get Contract Info Info Contract Info Version Chain Id Get",
					"value": "Get Contract Info Info Contract Info Version Chain Id Get",
					"action": "Odos contract info",
					"description": "All relevant contract information for a given chain and router version.\n\n## Response Body\n\n| Parameter | Description |\n| --- | --- |\n| `chainId` | ID of the chain this information is relevant for. Can be used to confirm input and output chains match. |\n| `routerAddress` | Address of the Odos Router Contract on the given chain and router version |\n| `executorAddress` | Address of the Odos Executor Contract currently in use on the given chain and router version. This contract is updated frequently to add support for new liquidity sources. |\n| `routerAbi` | ABI of the router |\n| `erc20Abi` | ERC20 Token ABI |",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/info/contract-info/{{$parameter[\"version\"]}}/{{$parameter[\"chain_id\"]}}"
						}
					}
				},
				{
					"name": "Get Router Info Router Version Chain Id Get",
					"value": "Get Router Info Router Version Chain Id Get",
					"action": "Address of the Odos router for given chain and version",
					"description": "Address of Odos router contract that a swap path must be sent to.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/info/router/{{$parameter[\"version\"]}}/{{$parameter[\"chain_id\"]}}"
						}
					}
				},
				{
					"name": "Get Executor Info Executor Version Chain Id Get",
					"value": "Get Executor Info Executor Version Chain Id Get",
					"action": "Address of the Odos executor for given chain and version",
					"description": "Get Odos Executor address for chain",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/info/executor/{{$parameter[\"version\"]}}/{{$parameter[\"chain_id\"]}}"
						}
					}
				},
				{
					"name": "Get Liquidity Sources Info Liquidity Sources Chain Id Get",
					"value": "Get Liquidity Sources Info Liquidity Sources Chain Id Get",
					"action": "Liquidity sources supported by Odos",
					"description": "List of all liquidity sources. This list can be used to filter out unwanted or problematic liquidity pools.\n\nPlease reach out if there is a liquidity source that we don't support. We pride ourselves in our DeFi coverage.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/info/liquidity-sources/{{$parameter[\"chain_id\"]}}"
						}
					}
				},
				{
					"name": "Get Market Intelligence Info Market Intelligence Get",
					"value": "Get Market Intelligence Info Market Intelligence Get",
					"action": "RWA market intelligence",
					"description": "Aggregated market intelligence for supported RWA assets.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/info/market-intelligence"
						}
					}
				},
				{
					"name": "Get Token Map Info Tokens Chain Id Get",
					"value": "Get Token Map Info Tokens Chain Id Get",
					"action": "Tokens supported by Odos",
					"description": "All of the supported ERC-20 tokens that Odos uses for swaps for input, output, and routing tokens. These tokens have been manually audited to ensure they will work with Odos. Custom tokens can also be used with Odos, but there is no guarantee Odos will find a valid path.\n\nPlease reach out if there is a token that should be added to Odos' natively supported tokens.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/info/tokens/{{$parameter[\"chain_id\"]}}"
						}
					}
				},
				{
					"name": "Get Current Block Info Current Block Chain Id Get",
					"value": "Get Current Block Info Current Block Chain Id Get",
					"action": "Get the current block number for Odos on given chain",
					"description": "Use this endpoint to monitor the current block number Odos is basing its quotes off of.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/info/current-block/{{$parameter[\"chain_id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /info/chains",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Information"
					],
					"operation": [
						"Get Chain Ids Info Chains Get"
					]
				}
			}
		},
		{
			"displayName": "GET /info/contract-info/{version}/{chain_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Information"
					],
					"operation": [
						"Get Contract Info Info Contract Info Version Chain Id Get"
					]
				}
			}
		},
		{
			"displayName": "Version",
			"name": "version",
			"required": true,
			"description": "Odos API supported versions",
			"default": "v3",
			"type": "options",
			"options": [
				{
					"name": "V 3",
					"value": "v3"
				},
				{
					"name": "V 2",
					"value": "v2"
				}
			],
			"displayOptions": {
				"show": {
					"resource": [
						"Information"
					],
					"operation": [
						"Get Contract Info Info Contract Info Version Chain Id Get"
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
						"Information"
					],
					"operation": [
						"Get Contract Info Info Contract Info Version Chain Id Get"
					]
				}
			}
		},
		{
			"displayName": "GET /info/router/{version}/{chain_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Information"
					],
					"operation": [
						"Get Router Info Router Version Chain Id Get"
					]
				}
			}
		},
		{
			"displayName": "Version",
			"name": "version",
			"required": true,
			"description": "Odos API supported versions",
			"default": "v3",
			"type": "options",
			"options": [
				{
					"name": "V 3",
					"value": "v3"
				},
				{
					"name": "V 2",
					"value": "v2"
				}
			],
			"displayOptions": {
				"show": {
					"resource": [
						"Information"
					],
					"operation": [
						"Get Router Info Router Version Chain Id Get"
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
						"Information"
					],
					"operation": [
						"Get Router Info Router Version Chain Id Get"
					]
				}
			}
		},
		{
			"displayName": "GET /info/executor/{version}/{chain_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Information"
					],
					"operation": [
						"Get Executor Info Executor Version Chain Id Get"
					]
				}
			}
		},
		{
			"displayName": "Version",
			"name": "version",
			"required": true,
			"description": "Odos API supported versions",
			"default": "v3",
			"type": "options",
			"options": [
				{
					"name": "V 3",
					"value": "v3"
				},
				{
					"name": "V 2",
					"value": "v2"
				}
			],
			"displayOptions": {
				"show": {
					"resource": [
						"Information"
					],
					"operation": [
						"Get Executor Info Executor Version Chain Id Get"
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
						"Information"
					],
					"operation": [
						"Get Executor Info Executor Version Chain Id Get"
					]
				}
			}
		},
		{
			"displayName": "GET /info/liquidity-sources/{chain_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Information"
					],
					"operation": [
						"Get Liquidity Sources Info Liquidity Sources Chain Id Get"
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
						"Information"
					],
					"operation": [
						"Get Liquidity Sources Info Liquidity Sources Chain Id Get"
					]
				}
			}
		},
		{
			"displayName": "GET /info/market-intelligence",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Information"
					],
					"operation": [
						"Get Market Intelligence Info Market Intelligence Get"
					]
				}
			}
		},
		{
			"displayName": "Chain Id",
			"name": "chainId",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "chainId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Information"
					],
					"operation": [
						"Get Market Intelligence Info Market Intelligence Get"
					]
				}
			}
		},
		{
			"displayName": "GET /info/tokens/{chain_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Information"
					],
					"operation": [
						"Get Token Map Info Tokens Chain Id Get"
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
						"Information"
					],
					"operation": [
						"Get Token Map Info Tokens Chain Id Get"
					]
				}
			}
		},
		{
			"displayName": "GET /info/current-block/{chain_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Information"
					],
					"operation": [
						"Get Current Block Info Current Block Chain Id Get"
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
						"Information"
					],
					"operation": [
						"Get Current Block Info Current Block Chain Id Get"
					]
				}
			}
		},
];
