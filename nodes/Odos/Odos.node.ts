import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { smartOrderRoutingDescription } from './resources/smart-order-routing';
import { pricingDescription } from './resources/pricing';
import { informationDescription } from './resources/information';

export class Odos implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'odos',
		name: 'N8nDevOdos',
		icon: { light: 'file:./odos.svg', dark: 'file:./odos.dark.svg' },
		group: ['input'],
		version: 1,
		subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
		description: 'Odos DeFi routing protocol optimizing token swaps by searching millions of paths for the best rates and lowest fees',
		defaults: { name: 'odos' },
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [
			{
				name: 'N8nDevOdosApi',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: '={{\$credentials.url}}',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [
				{
					"name": "Smart Order Routing",
					"value": "Smart Order Routing",
					"description": "Swap tokens"
				},
				{
					"name": "Pricing",
					"value": "Pricing",
					"description": "Query Odos' price for any token with liquidity"
				},
				{
					"name": "Information",
					"value": "Information",
					"description": "General information about the Odos service offerings"
				}
			],
			"default": ""
		},
		...smartOrderRoutingDescription,
		...pricingDescription,
		...informationDescription
		],
	};
}
