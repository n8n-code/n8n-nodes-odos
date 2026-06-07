import type { INodeProperties } from 'n8n-workflow';

export const smartOrderRoutingDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Smart Order Routing"
					]
				}
			},
			"options": [
				{
					"name": "Swap V 3 Sor Swap V 3 Post",
					"value": "Swap V 3 Sor Swap V 3 Post",
					"action": "Generate Odos Quote V3 + Assembly",
					"description": "Quote a path for swapping between assets atomically. This can be used programmatically to check for a quoted price of a given trade without needing to wait for an assembled transaction to be created and provided. It can also be used to anonymously check quotes.\n\n## Request Body\n\n| Parameter | Description | Required |\n| --- | ------------- | --- |\n| `chainId` | Chain ID to use for quote generation. A list of valid chains can be retrieved from [`info/chains`](#/Info/get_chain_ids_info_chains_get). | Yes |\n| `inputTokens` | Input tokens and amounts for quote | Yes |\n| `outputTokens`| Output tokens and proportions for quote | Yes |\n| `gasPrice` | Gas price to use for path generation. This price directly affects the path computation. If no gas price is provided, our default price from our frontend will be used. | No |\n| `userAddr` | Address of the wallet executing the swap. If no wallet is provided, the quote cannot be turned into a path. This can be viewed as informational only. | No |\n| `slippageLimitPercent` | Slippage percent to use for checking if the path is valid. Float. Example: to set slippage to 0.5% send `0.5`. If 1% is desired, send `1`. If not provided, slippage will be set `0.3`.  | No |\n| `sourceBlacklist` | List of liquidity providers that are not to be used for the swap path. A list of all liquidity providers for a given chain can be retrieved from [`info/liquidity-sources/{chain_id}`](#/Info/liquidity_sources_info_liquidity_sources__chain_id__get) | No |\n| `sourceWhitelist` | List of liquidity providers to exclusively use for the swap path. A list of all liquidity providers for a given chain can be retrieved from [`info/liquidity-sources/{chain_id}`](#/Info/liquidity_sources_info_liquidity_sources__chain_id__get) | No |\n| `poolBlacklist` | List of pool ids that are not to be used for the swap path | No |\n| `pathVizImage` | Return a Base64 encoded SVG of path visualization image for display on web frontends | No |\n| `pathVizImageConfig` | Optional customization parameters for generated path viz image | No |\n| `disableRFQs` | Disable all exchanges that qualify as RFQs with centralized API dependencies and time-sensitive quotes or potential user address restrictions. Default is true. | No |\n| `referralCode` | Code for registering your usage with Odos and receiving partner specific benefits. [Referral Code Documentation](https://docs.odos.xyz/product/sor/v2/referral-code) | No |\n| `compact` | Use Odos V2 compact call data for transaction, defaults to `true` | No |\n| `likeAsset` | If input and output tokens are all the same asset type (ex: USD stable coins), only route through like assets for decreased slippage. Defaults to `false` | No |\n| `simple` | If a less complicated quote and/or a quicker response time is desired, this flag can be set. Defaults to `false` | No |\n\n### inputTokens\n\n| Parameter | Description | Required |\n| --- | --- | --- |\n| `tokenAddress` | Address of the token to swap from. This should be a [checksummed address](https://eips.ethereum.org/EIPS/eip-55). | Yes |\n| `amount` | Amount of the token in fixed precision. String | Yes |\n\n\n### outputTokens\n\n| Parameter | Description | Required |\n| --- | --- | --- |\n| `tokenAddress` | Address of the token to swap to. This should be a [checksummed address](https://eips.ethereum.org/EIPS/eip-55). | Yes |\n| `proportion` | Percent of token to output. For a single swap, this is set to 1. Float. | Yes |\n\n### pathVizImageConfig\n\n| Parameter | Description | Required |\n| --- | ------------- | --- |\n| `linkColors` | List of hex codes to generate color spectrum for liquidity sources in path visualization | No |\n| `nodeColor` | Hex code for setting the color of token nodes in path visualization | No |\n| `nodeTextColor` | Hex code to set the color of token symbol text on token nodes | No |\n| `legendTextColor` | Hex code to set the color of the visualization legend text | No |\n| `width` | Set a custom width proportion for the visualization | No |\n| `height` | Set a custom height proportion for the visualization | No |\n\n#### Example Full Config Response:\n\n```json\n{\n  \"linkColors\": [\"#123456\"],\n  \"nodeColor\": \"#1BEEF1\",\n  \"nodeTextColor\": \"#FFFFFF\",\n  \"legendTextColor\": \"#000000\",\n  \"width\": 1200,\n  \"height\": 800\n}\n```\n\n#### Basic integration:\n\nSet the `src` attribute of an `<img />` HTML tag to the `pathVizImage` text field of the quote response\n\n\n## Response Body\n\n| Parameter | Description |\n| --- | --- |\n| `deprecated` | If the endpoint or any part of the request is deprecated, this field will be populated with a message. This field is omitted if there is nothing to notify on. |\n| `pathId` | ID of the path used for asking for an assembled quote |\n| `blockNumber` | Block number the quote was generated for |\n| `gasEstimate` | A very naive gas estimate |\n| `gasEstimateValue` | USD Value of the `gasEstimate` |\n| `dataGasEstimate` | Used for Layer 2 chains |\n| `gweiPerGas` | Amount of gWei per gas unit |\n| `inTokens` | A list of token addresses and amounts |\n| `inAmounts` | A list of input token amounts |\n| `outTokens` | A list of token addresses and amounts |\n| `outAmounts` | A list of output token amounts |\n| `netOutValue` | USD value of the sum of the output tokens after gas |\n| `outValues` | A list of the output values of the given output tokens. In the same order as the `outputTokens` list |\n| `priceImpact` | Percent decrease in the realized price of the path from the initial price of the path before the swap is executed. |\n| `percentDiff` | Percent difference between the value of all input tokens and the value of all output tokens (as determined by the Odos pricing service) |\n| `partnerFeePercent` | Percent fee taken by partner referral code given. Fee is already deducted from quote |\n| `pathVizImage` | Base64 encoded image ready to be used within a UI |",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/sor/swap/v3"
						}
					}
				},
				{
					"name": "Quote V 3 Sor Quote V 3 Post",
					"value": "Quote V 3 Sor Quote V 3 Post",
					"action": "Generate Odos Quote",
					"description": "Quote a path for swapping between assets atomically. This can be used programmatically to check for a quoted price of a given trade without needing to wait for an assembled transaction to be created and provided. It can also be used to anonymously check quotes.\n\n## Request Body\n\n| Parameter | Description | Required |\n| --- | ------------- | --- |\n| `chainId` | Chain ID to use for quote generation. A list of valid chains can be retrieved from [`info/chains`](#/Info/get_chain_ids_info_chains_get). | Yes |\n| `inputTokens` | Input tokens and amounts for quote | Yes |\n| `outputTokens`| Output tokens and proportions for quote | Yes |\n| `gasPrice` | Gas price to use for path generation. This price directly affects the path computation. If no gas price is provided, our default price from our frontend will be used. | No |\n| `userAddr` | Address of the wallet executing the swap. If no wallet is provided, the quote cannot be turned into a path. This can be viewed as informational only. | No |\n| `slippageLimitPercent` | Slippage percent to use for checking if the path is valid. Float. Example: to set slippage to 0.5% send `0.5`. If 1% is desired, send `1`. If not provided, slippage will be set `0.3`.  | No |\n| `sourceBlacklist` | List of liquidity providers that are not to be used for the swap path. A list of all liquidity providers for a given chain can be retrieved from [`info/liquidity-sources/{chain_id}`](#/Info/liquidity_sources_info_liquidity_sources__chain_id__get) | No |\n| `sourceWhitelist` | List of liquidity providers to exclusively use for the swap path. A list of all liquidity providers for a given chain can be retrieved from [`info/liquidity-sources/{chain_id}`](#/Info/liquidity_sources_info_liquidity_sources__chain_id__get) | No |\n| `poolBlacklist` | List of pool ids that are not to be used for the swap path | No |\n| `pathVizImage` | Return a Base64 encoded SVG of path visualization image for display on web frontends | No |\n| `pathVizImageConfig` | Optional customization parameters for generated path viz image | No |\n| `disableRFQs` | Disable all exchanges that qualify as RFQs with centralized API dependencies and time-sensitive quotes or potential user address restrictions. Default is true. | No |\n| `referralCode` | Code for registering your usage with Odos and receiving partner specific benefits. [Referral Code Documentation](https://docs.odos.xyz/product/sor/v2/referral-code) | No |\n| `compact` | Use Odos V2 compact call data for transaction, defaults to `true` | No |\n| `likeAsset` | If input and output tokens are all the same asset type (ex: USD stable coins), only route through like assets for decreased slippage. Defaults to `false` | No |\n| `simple` | If a less complicated quote and/or a quicker response time is desired, this flag can be set. Defaults to `false` | No |\n\n### inputTokens\n\n| Parameter | Description | Required |\n| --- | --- | --- |\n| `tokenAddress` | Address of the token to swap from. This should be a [checksummed address](https://eips.ethereum.org/EIPS/eip-55). | Yes |\n| `amount` | Amount of the token in fixed precision. String | Yes |\n\n\n### outputTokens\n\n| Parameter | Description | Required |\n| --- | --- | --- |\n| `tokenAddress` | Address of the token to swap to. This should be a [checksummed address](https://eips.ethereum.org/EIPS/eip-55). | Yes |\n| `proportion` | Percent of token to output. For a single swap, this is set to 1. Float. | Yes |\n\n### pathVizImageConfig\n\n| Parameter | Description | Required |\n| --- | ------------- | --- |\n| `linkColors` | List of hex codes to generate color spectrum for liquidity sources in path visualization | No |\n| `nodeColor` | Hex code for setting the color of token nodes in path visualization | No |\n| `nodeTextColor` | Hex code to set the color of token symbol text on token nodes | No |\n| `legendTextColor` | Hex code to set the color of the visualization legend text | No |\n| `width` | Set a custom width proportion for the visualization | No |\n| `height` | Set a custom height proportion for the visualization | No |\n\n#### Example Full Config Response:\n\n```json\n{\n  \"linkColors\": [\"#123456\"],\n  \"nodeColor\": \"#1BEEF1\",\n  \"nodeTextColor\": \"#FFFFFF\",\n  \"legendTextColor\": \"#000000\",\n  \"width\": 1200,\n  \"height\": 800\n}\n```\n\n#### Basic integration:\n\nSet the `src` attribute of an `<img />` HTML tag to the `pathVizImage` text field of the quote response\n\n\n## Response Body\n\n| Parameter | Description |\n| --- | --- |\n| `deprecated` | If the endpoint or any part of the request is deprecated, this field will be populated with a message. This field is omitted if there is nothing to notify on. |\n| `pathId` | ID of the path used for asking for an assembled quote |\n| `blockNumber` | Block number the quote was generated for |\n| `gasEstimate` | A very naive gas estimate |\n| `gasEstimateValue` | USD Value of the `gasEstimate` |\n| `dataGasEstimate` | Used for Layer 2 chains |\n| `gweiPerGas` | Amount of gWei per gas unit |\n| `inTokens` | A list of token addresses and amounts |\n| `inAmounts` | A list of input token amounts |\n| `outTokens` | A list of token addresses and amounts |\n| `outAmounts` | A list of output token amounts |\n| `netOutValue` | USD value of the sum of the output tokens after gas |\n| `outValues` | A list of the output values of the given output tokens. In the same order as the `outputTokens` list |\n| `priceImpact` | Percent decrease in the realized price of the path from the initial price of the path before the swap is executed. |\n| `percentDiff` | Percent difference between the value of all input tokens and the value of all output tokens (as determined by the Odos pricing service) |\n| `partnerFeePercent` | Percent fee taken by partner referral code given. Fee is already deducted from quote |\n| `pathVizImage` | Base64 encoded image ready to be used within a UI |",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/sor/quote/v3"
						}
					}
				},
				{
					"name": "Quote Zap V 3 Sor Quote V 3 Zap Post",
					"value": "Quote Zap V 3 Sor Quote V 3 Zap Post",
					"action": "Generate Odos Zap Quote",
					"description": "Quote a path for zapping into or out of liquidity positions atomically. Input tokens can be both regular ERC-20 tokens and liquidity pool tokens. Outputs can be regular ERC-20 tokens or liquidity pool tokens.\n\n## Request Body\n\n| Parameter | Description | Required |\n| --- | ------------- | --- |\n| `chainId` | Chain ID to use for quote generation. A list of valid chains can be retrieved from [`info/chains`](#/Info/get_chain_ids_info_chains_get). | Yes |\n| `inputTokens` | Input tokens and amounts for quote | Yes |\n| `outputTokens`| Output tokens and proportions for quote | Yes |\n| `gasPrice` | Gas price to use for path generation. This price directly affects the path computation. If no gas price is provided, our default price from our frontend will be used. | No |\n| `userAddr` | Address of the wallet executing the swap. If no wallet is provided, the quote cannot be turned into a path. This can be viewed as informational only. | No |\n| `slippageLimitPercent` | Slippage percent to use for checking if the path is valid. Float. Example: to set slippage to 0.5% send `0.5`. If 1% is desired, send `1`. If not provided, slippage will be set `0.3`.  | No |\n| `sourceBlacklist` | List of liquidity providers that are not to be used for the swap path. A list of all liquidity providers for a given chain can be retrieved from [`info/liquidity-sources/{chain_id}`](#/Info/liquidity_sources_info_liquidity_sources__chain_id__get) | No |\n| `sourceWhitelist` | List of liquidity providers to exclusively use for the swap path. A list of all liquidity providers for a given chain can be retrieved from [`info/liquidity-sources/{chain_id}`](#/Info/liquidity_sources_info_liquidity_sources__chain_id__get) | No |\n| `poolBlacklist` | List of pool ids that are not to be used for the swap path | No |\n| `pathVizImage` | Return a Base64 encoded SVG of path visualization image for display on web frontends | No |\n| `pathVizImageConfig` | Optional customization parameters for generated path viz image | No |\n| `disableRFQs` | Disable all exchanges that qualify as RFQs with centralized API dependencies and time-sensitive quotes or potential user address restrictions. Default is true. | No |\n| `referralCode` | Code for registering your usage with Odos and receiving partner specific benefits. [Referral Code Documentation](https://docs.odos.xyz/product/sor/v2/referral-code) | No |\n| `compact` | Use Odos V2 compact call data for transaction, defaults to `true` | No |\n| `likeAsset` | If input and output tokens are all the same asset type (ex: USD stable coins), only route through like assets for decreased slippage. Defaults to `false` | No |\n| `simple` | If a less complicated quote and/or a quicker response time is desired, this flag can be set. Defaults to `false` | No |\n\n### inputTokens\n\n| Parameter | Description | Required |\n| --- | --- | --- |\n| `tokenAddress` | Address of the token to swap from. This should be a [checksummed address](https://eips.ethereum.org/EIPS/eip-55). | Yes |\n| `amount` | Amount of the token in fixed precision. String | Yes |\n\n\n### outputTokens\n\n| Parameter | Description | Required |\n| --- | --- | --- |\n| `tokenAddress` | Address of the token to swap to. This should be a [checksummed address](https://eips.ethereum.org/EIPS/eip-55). | Yes |\n| `proportion` | Percent of token to output. For a single swap, this is set to 1. Float. | Yes |\n\n### pathVizImageConfig\n\n| Parameter | Description | Required |\n| --- | ------------- | --- |\n| `linkColors` | List of hex codes to generate color spectrum for liquidity sources in path visualization | No |\n| `nodeColor` | Hex code for setting the color of token nodes in path visualization | No |\n| `nodeTextColor` | Hex code to set the color of token symbol text on token nodes | No |\n| `legendTextColor` | Hex code to set the color of the visualization legend text | No |\n| `width` | Set a custom width proportion for the visualization | No |\n| `height` | Set a custom height proportion for the visualization | No |\n\n#### Example Full Config Response:\n\n```json\n{\n  \"linkColors\": [\"#123456\"],\n  \"nodeColor\": \"#1BEEF1\",\n  \"nodeTextColor\": \"#FFFFFF\",\n  \"legendTextColor\": \"#000000\",\n  \"width\": 1200,\n  \"height\": 800\n}\n```\n\n#### Basic integration:\n\nSet the `src` attribute of an `<img />` HTML tag to the `pathVizImage` text field of the quote response\n\n\n## Response Body\n\n| Parameter | Description |\n| --- | --- |\n| `deprecated` | If the endpoint or any part of the request is deprecated, this field will be populated with a message. This field is omitted if there is nothing to notify on. |\n| `pathId` | ID of the path used for asking for an assembled quote |\n| `blockNumber` | Block number the quote was generated for |\n| `gasEstimate` | A very naive gas estimate |\n| `gasEstimateValue` | USD Value of the `gasEstimate` |\n| `dataGasEstimate` | Used for Layer 2 chains |\n| `gweiPerGas` | Amount of gWei per gas unit |\n| `inTokens` | A list of token addresses and amounts |\n| `inAmounts` | A list of input token amounts |\n| `outTokens` | A list of token addresses and amounts |\n| `outAmounts` | A list of output token amounts |\n| `netOutValue` | USD value of the sum of the output tokens after gas |\n| `outValues` | A list of the output values of the given output tokens. In the same order as the `outputTokens` list |\n| `priceImpact` | Percent decrease in the realized price of the path from the initial price of the path before the swap is executed. |\n| `percentDiff` | Percent difference between the value of all input tokens and the value of all output tokens (as determined by the Odos pricing service) |\n| `partnerFeePercent` | Percent fee taken by partner referral code given. Fee is already deducted from quote |\n| `pathVizImage` | Base64 encoded image ready to be used within a UI |",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/sor/quote/v3/zap"
						}
					}
				},
				{
					"name": "Quote Sor Quote V 2 Post",
					"value": "Quote Sor Quote V 2 Post",
					"action": "Generate Odos Quote",
					"description": "Quote a path for swapping between assets atomically. This can be used programmatically to check for a quoted price of a given trade without needing to wait for an assembled transaction to be created and provided. It can also be used to anonymously check quotes.\n\n## Request Body\n\n| Parameter | Description | Required |\n| --- | ------------- | --- |\n| `chainId` | Chain ID to use for quote generation. A list of valid chains can be retrieved from [`info/chains`](#/Info/get_chain_ids_info_chains_get). | Yes |\n| `inputTokens` | Input tokens and amounts for quote | Yes |\n| `outputTokens`| Output tokens and proportions for quote | Yes |\n| `gasPrice` | Gas price to use for path generation. This price directly affects the path computation. If no gas price is provided, our default price from our frontend will be used. | No |\n| `userAddr` | Address of the wallet executing the swap. If no wallet is provided, the quote cannot be turned into a path. This can be viewed as informational only. | No |\n| `slippageLimitPercent` | Slippage percent to use for checking if the path is valid. Float. Example: to set slippage to 0.5% send `0.5`. If 1% is desired, send `1`. If not provided, slippage will be set `0.3`.  | No |\n| `sourceBlacklist` | List of liquidity providers that are not to be used for the swap path. A list of all liquidity providers for a given chain can be retrieved from [`info/liquidity-sources/{chain_id}`](#/Info/liquidity_sources_info_liquidity_sources__chain_id__get) | No |\n| `sourceWhitelist` | List of liquidity providers to exclusively use for the swap path. A list of all liquidity providers for a given chain can be retrieved from [`info/liquidity-sources/{chain_id}`](#/Info/liquidity_sources_info_liquidity_sources__chain_id__get) | No |\n| `poolBlacklist` | List of pool ids that are not to be used for the swap path | No |\n| `pathVizImage` | Return a Base64 encoded SVG of path visualization image for display on web frontends | No |\n| `pathVizImageConfig` | Optional customization parameters for generated path viz image | No |\n| `disableRFQs` | Disable all exchanges that qualify as RFQs with centralized API dependencies and time-sensitive quotes or potential user address restrictions. Default is true. | No |\n| `referralCode` | Code for registering your usage with Odos and receiving partner specific benefits. [Referral Code Documentation](https://docs.odos.xyz/product/sor/v2/referral-code) | No |\n| `compact` | Use Odos V2 compact call data for transaction, defaults to `true` | No |\n| `likeAsset` | If input and output tokens are all the same asset type (ex: USD stable coins), only route through like assets for decreased slippage. Defaults to `false` | No |\n| `simple` | If a less complicated quote and/or a quicker response time is desired, this flag can be set. Defaults to `false` | No |\n\n### inputTokens\n\n| Parameter | Description | Required |\n| --- | --- | --- |\n| `tokenAddress` | Address of the token to swap from. This should be a [checksummed address](https://eips.ethereum.org/EIPS/eip-55). | Yes |\n| `amount` | Amount of the token in fixed precision. String | Yes |\n\n\n### outputTokens\n\n| Parameter | Description | Required |\n| --- | --- | --- |\n| `tokenAddress` | Address of the token to swap to. This should be a [checksummed address](https://eips.ethereum.org/EIPS/eip-55). | Yes |\n| `proportion` | Percent of token to output. For a single swap, this is set to 1. Float. | Yes |\n\n### pathVizImageConfig\n\n| Parameter | Description | Required |\n| --- | ------------- | --- |\n| `linkColors` | List of hex codes to generate color spectrum for liquidity sources in path visualization | No |\n| `nodeColor` | Hex code for setting the color of token nodes in path visualization | No |\n| `nodeTextColor` | Hex code to set the color of token symbol text on token nodes | No |\n| `legendTextColor` | Hex code to set the color of the visualization legend text | No |\n| `width` | Set a custom width proportion for the visualization | No |\n| `height` | Set a custom height proportion for the visualization | No |\n\n#### Example Full Config Response:\n\n```json\n{\n  \"linkColors\": [\"#123456\"],\n  \"nodeColor\": \"#1BEEF1\",\n  \"nodeTextColor\": \"#FFFFFF\",\n  \"legendTextColor\": \"#000000\",\n  \"width\": 1200,\n  \"height\": 800\n}\n```\n\n#### Basic integration:\n\nSet the `src` attribute of an `<img />` HTML tag to the `pathVizImage` text field of the quote response\n\n\n## Response Body\n\n| Parameter | Description |\n| --- | --- |\n| `deprecated` | If the endpoint or any part of the request is deprecated, this field will be populated with a message. This field is omitted if there is nothing to notify on. |\n| `pathId` | ID of the path used for asking for an assembled quote |\n| `blockNumber` | Block number the quote was generated for |\n| `gasEstimate` | A very naive gas estimate |\n| `gasEstimateValue` | USD Value of the `gasEstimate` |\n| `dataGasEstimate` | Used for Layer 2 chains |\n| `gweiPerGas` | Amount of gWei per gas unit |\n| `inTokens` | A list of token addresses and amounts |\n| `inAmounts` | A list of input token amounts |\n| `outTokens` | A list of token addresses and amounts |\n| `outAmounts` | A list of output token amounts |\n| `netOutValue` | USD value of the sum of the output tokens after gas |\n| `outValues` | A list of the output values of the given output tokens. In the same order as the `outputTokens` list |\n| `priceImpact` | Percent decrease in the realized price of the path from the initial price of the path before the swap is executed. |\n| `percentDiff` | Percent difference between the value of all input tokens and the value of all output tokens (as determined by the Odos pricing service) |\n| `partnerFeePercent` | Percent fee taken by partner referral code given. Fee is already deducted from quote |\n| `pathVizImage` | Base64 encoded image ready to be used within a UI |",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/sor/quote/v2"
						}
					}
				},
				{
					"name": "Quote Zap Sor Quote V 2 Zap Post",
					"value": "Quote Zap Sor Quote V 2 Zap Post",
					"action": "Generate Odos Zap Quote",
					"description": "Quote a path for zapping into or out of liquidity positions atomically. Input tokens can be both regular ERC-20 tokens and liquidity pool tokens. Outputs can be regular ERC-20 tokens or liquidity pool tokens.\n\n## Request Body\n\n| Parameter | Description | Required |\n| --- | ------------- | --- |\n| `chainId` | Chain ID to use for quote generation. A list of valid chains can be retrieved from [`info/chains`](#/Info/get_chain_ids_info_chains_get). | Yes |\n| `inputTokens` | Input tokens and amounts for quote | Yes |\n| `outputTokens`| Output tokens and proportions for quote | Yes |\n| `gasPrice` | Gas price to use for path generation. This price directly affects the path computation. If no gas price is provided, our default price from our frontend will be used. | No |\n| `userAddr` | Address of the wallet executing the swap. If no wallet is provided, the quote cannot be turned into a path. This can be viewed as informational only. | No |\n| `slippageLimitPercent` | Slippage percent to use for checking if the path is valid. Float. Example: to set slippage to 0.5% send `0.5`. If 1% is desired, send `1`. If not provided, slippage will be set `0.3`.  | No |\n| `sourceBlacklist` | List of liquidity providers that are not to be used for the swap path. A list of all liquidity providers for a given chain can be retrieved from [`info/liquidity-sources/{chain_id}`](#/Info/liquidity_sources_info_liquidity_sources__chain_id__get) | No |\n| `sourceWhitelist` | List of liquidity providers to exclusively use for the swap path. A list of all liquidity providers for a given chain can be retrieved from [`info/liquidity-sources/{chain_id}`](#/Info/liquidity_sources_info_liquidity_sources__chain_id__get) | No |\n| `poolBlacklist` | List of pool ids that are not to be used for the swap path | No |\n| `pathVizImage` | Return a Base64 encoded SVG of path visualization image for display on web frontends | No |\n| `pathVizImageConfig` | Optional customization parameters for generated path viz image | No |\n| `disableRFQs` | Disable all exchanges that qualify as RFQs with centralized API dependencies and time-sensitive quotes or potential user address restrictions. Default is true. | No |\n| `referralCode` | Code for registering your usage with Odos and receiving partner specific benefits. [Referral Code Documentation](https://docs.odos.xyz/product/sor/v2/referral-code) | No |\n| `compact` | Use Odos V2 compact call data for transaction, defaults to `true` | No |\n| `likeAsset` | If input and output tokens are all the same asset type (ex: USD stable coins), only route through like assets for decreased slippage. Defaults to `false` | No |\n| `simple` | If a less complicated quote and/or a quicker response time is desired, this flag can be set. Defaults to `false` | No |\n\n### inputTokens\n\n| Parameter | Description | Required |\n| --- | --- | --- |\n| `tokenAddress` | Address of the token to swap from. This should be a [checksummed address](https://eips.ethereum.org/EIPS/eip-55). | Yes |\n| `amount` | Amount of the token in fixed precision. String | Yes |\n\n\n### outputTokens\n\n| Parameter | Description | Required |\n| --- | --- | --- |\n| `tokenAddress` | Address of the token to swap to. This should be a [checksummed address](https://eips.ethereum.org/EIPS/eip-55). | Yes |\n| `proportion` | Percent of token to output. For a single swap, this is set to 1. Float. | Yes |\n\n### pathVizImageConfig\n\n| Parameter | Description | Required |\n| --- | ------------- | --- |\n| `linkColors` | List of hex codes to generate color spectrum for liquidity sources in path visualization | No |\n| `nodeColor` | Hex code for setting the color of token nodes in path visualization | No |\n| `nodeTextColor` | Hex code to set the color of token symbol text on token nodes | No |\n| `legendTextColor` | Hex code to set the color of the visualization legend text | No |\n| `width` | Set a custom width proportion for the visualization | No |\n| `height` | Set a custom height proportion for the visualization | No |\n\n#### Example Full Config Response:\n\n```json\n{\n  \"linkColors\": [\"#123456\"],\n  \"nodeColor\": \"#1BEEF1\",\n  \"nodeTextColor\": \"#FFFFFF\",\n  \"legendTextColor\": \"#000000\",\n  \"width\": 1200,\n  \"height\": 800\n}\n```\n\n#### Basic integration:\n\nSet the `src` attribute of an `<img />` HTML tag to the `pathVizImage` text field of the quote response\n\n\n## Response Body\n\n| Parameter | Description |\n| --- | --- |\n| `deprecated` | If the endpoint or any part of the request is deprecated, this field will be populated with a message. This field is omitted if there is nothing to notify on. |\n| `pathId` | ID of the path used for asking for an assembled quote |\n| `blockNumber` | Block number the quote was generated for |\n| `gasEstimate` | A very naive gas estimate |\n| `gasEstimateValue` | USD Value of the `gasEstimate` |\n| `dataGasEstimate` | Used for Layer 2 chains |\n| `gweiPerGas` | Amount of gWei per gas unit |\n| `inTokens` | A list of token addresses and amounts |\n| `inAmounts` | A list of input token amounts |\n| `outTokens` | A list of token addresses and amounts |\n| `outAmounts` | A list of output token amounts |\n| `netOutValue` | USD value of the sum of the output tokens after gas |\n| `outValues` | A list of the output values of the given output tokens. In the same order as the `outputTokens` list |\n| `priceImpact` | Percent decrease in the realized price of the path from the initial price of the path before the swap is executed. |\n| `percentDiff` | Percent difference between the value of all input tokens and the value of all output tokens (as determined by the Odos pricing service) |\n| `partnerFeePercent` | Percent fee taken by partner referral code given. Fee is already deducted from quote |\n| `pathVizImage` | Base64 encoded image ready to be used within a UI |",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/sor/quote/v2/zap"
						}
					}
				},
				{
					"name": "Assemble Sor Assemble Post",
					"value": "Assemble Sor Assemble Post",
					"action": "Assemble Odos quote into transaction",
					"description": "Provide valid call data for a given quoted path. This is called after calling the `sor/quote` endpoint and receiving back a quote and `pathID`.\n\nA quote only lasts for 60 seconds. If it is not assembled in that time, it will not be available to assemble, and the path will need to be quoted again.\n\nUse the information provided by this endpoint directly. Do not try to modify the call data. You will make a mistake and you will end up losing money. **We will not provide support for users modifying the call data provided by our API.** The data the API provides is directly able to be executed on chain.\n\n## Request Body\n\n| Parameter | Description | Required |\n| --- | ------- | --- |\n| `userAddr` | Address of the user who requested the quote | Yes |\n| `pathId` | ID of the Path returned from the `sor/quote/{version}` endpoint | Yes |\n| `simulate` | Simulate the transaction to make sure it can actually be executed. This increases the response time to receive transaction data. Defaults to False. | No |\n| `receiver` | Optionally, specify a different receiver address for the transaction output, default receiver is `userAddr` | No |\n\n## Response Body\n\n| Parameter | Description |\n| --- | --- |\n| `deprecated` | If the endpoint or any part of the request is deprecated, this field will be populated with a message. This field is omitted if there is nothing to notify on. |\n| `blockNumber` | Block number the quote was generated for |\n| `gasEstimate` | A very naive gas estimate |\n| `gasEstimateValue` | USD Value of the `gasEstimate` |\n| `inputTokens` | List of input token addresses and amounts |\n| `outputTokens` | List of output token addresses and amounts |\n| `netOutValue` | USD value of the sum of the output tokens after gas |\n| `outValues` | A list of the output values of the given output tokens. In the same order as the `outputTokens` list |\n| `transaction` | Transaction data needed for execution |\n| `simulation` | Simulation results |\n\n### Transaction\n\nThis structure can be signed by a wallet and be executed against the Odos router.\n\nIn the smart contract that makes the swap, the `data` field of the transaction given in the response can be used in a low level call from another contract:\n\n```solidity\n(bool success, bytes memory result) = router.call{value: $ethInput}(data)\n```\n\nWhere `$ethInput` is `0` unless the native coin of the network is an input, in which case the value should be set to the corresponding path input amount. Approvals for ERC20 inputs should be made to the router address prior to the call. The address of the router can be found in the `to` field of the response, as well as from the `/info/router/{version}/{chain_id}` endpoint.\n\n| Parameter | Description |\n| --- | --- |\n| `chainId` | The chain ID for the path to execute one |\n| `gas` | Suggested gas limit. Either 2X the naive gas estimate or 10% more than the simulated gas estimate |\n| `gasPrice` | Gas price used to calculate the path |\n| `value` | Input amount of gas token. 0 if the gas token is not one of the inputs |\n| `to` | Odos router address to be used for the transaction |\n| `from` | Source of the executed transaction |\n| `data` | Call data for the Odos router. This is the payload used by our executor contracts to execute the necessary DEX swaps. |\n| `nonce` | The standard ETH nonce |\n\n\n### Simulation\n\nThis the result of the simulation\n\n| Parameter | Description |\n| --- | --- |\n| `isSuccess` | If the transaction reverted or not |\n| `amountsOut` | Amounts out when the path was simulated |\n| `simGasUsed` | Gas used by the simulation |\n| `gasEstimate` | Estimate from a `eth_estimateGas` RPC call for the path |\n| `simulationError` | If a simulation error occurs, it will show up here. |",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/sor/assemble"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /sor/swap/v3",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Smart Order Routing"
					],
					"operation": [
						"Swap V 3 Sor Swap V 3 Post"
					]
				}
			}
		},
		{
			"displayName": "Deprecated",
			"name": "deprecated",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "deprecated",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Smart Order Routing"
					],
					"operation": [
						"Swap V 3 Sor Swap V 3 Post"
					]
				}
			}
		},
		{
			"displayName": "Trace Id",
			"name": "traceId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "traceId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Smart Order Routing"
					],
					"operation": [
						"Swap V 3 Sor Swap V 3 Post"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Chain Id",
			"name": "chainId",
			"type": "number",
			"default": 0,
			"description": "Chain ID to request path for",
			"routing": {
				"send": {
					"property": "chainId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Smart Order Routing"
					],
					"operation": [
						"Swap V 3 Sor Swap V 3 Post"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Input Tokens",
			"name": "inputTokens",
			"type": "json",
			"default": "[\n  {}\n]",
			"description": "Input tokens and amounts for quote",
			"routing": {
				"send": {
					"property": "inputTokens",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Smart Order Routing"
					],
					"operation": [
						"Swap V 3 Sor Swap V 3 Post"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Output Tokens",
			"name": "outputTokens",
			"type": "json",
			"default": "[\n  {\n    \"proportion\": 1\n  }\n]",
			"description": "Output tokens and proportions for quote",
			"routing": {
				"send": {
					"property": "outputTokens",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Smart Order Routing"
					],
					"operation": [
						"Swap V 3 Sor Swap V 3 Post"
					]
				}
			}
		},
		{
			"displayName": "Gas Price",
			"name": "gasPrice",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "gasPrice",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Smart Order Routing"
					],
					"operation": [
						"Swap V 3 Sor Swap V 3 Post"
					]
				}
			}
		},
		{
			"displayName": "User Addr",
			"name": "userAddr",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "userAddr",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Smart Order Routing"
					],
					"operation": [
						"Swap V 3 Sor Swap V 3 Post"
					]
				}
			}
		},
		{
			"displayName": "Slippage Limit Percent",
			"name": "slippageLimitPercent",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "slippageLimitPercent",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Smart Order Routing"
					],
					"operation": [
						"Swap V 3 Sor Swap V 3 Post"
					]
				}
			}
		},
		{
			"displayName": "Source Blacklist",
			"name": "sourceBlacklist",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "sourceBlacklist",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Smart Order Routing"
					],
					"operation": [
						"Swap V 3 Sor Swap V 3 Post"
					]
				}
			}
		},
		{
			"displayName": "Source Whitelist",
			"name": "sourceWhitelist",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "sourceWhitelist",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Smart Order Routing"
					],
					"operation": [
						"Swap V 3 Sor Swap V 3 Post"
					]
				}
			}
		},
		{
			"displayName": "Pool Blacklist",
			"name": "poolBlacklist",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "poolBlacklist",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Smart Order Routing"
					],
					"operation": [
						"Swap V 3 Sor Swap V 3 Post"
					]
				}
			}
		},
		{
			"displayName": "Path Viz",
			"name": "pathViz",
			"type": "boolean",
			"default": true,
			"routing": {
				"send": {
					"property": "pathViz",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Smart Order Routing"
					],
					"operation": [
						"Swap V 3 Sor Swap V 3 Post"
					]
				}
			}
		},
		{
			"displayName": "Path Viz Image",
			"name": "pathVizImage",
			"type": "boolean",
			"default": true,
			"routing": {
				"send": {
					"property": "pathVizImage",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Smart Order Routing"
					],
					"operation": [
						"Swap V 3 Sor Swap V 3 Post"
					]
				}
			}
		},
		{
			"displayName": "Path Viz Image Config",
			"name": "pathVizImageConfig",
			"type": "json",
			"default": "{\n  \"linkColors\": [\n    null\n  ]\n}",
			"description": "Schema for path viz image config",
			"routing": {
				"send": {
					"property": "pathVizImageConfig",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Smart Order Routing"
					],
					"operation": [
						"Swap V 3 Sor Swap V 3 Post"
					]
				}
			}
		},
		{
			"displayName": "Disable RF Qs",
			"name": "disableRFQs",
			"type": "boolean",
			"default": true,
			"routing": {
				"send": {
					"property": "disableRFQs",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Smart Order Routing"
					],
					"operation": [
						"Swap V 3 Sor Swap V 3 Post"
					]
				}
			}
		},
		{
			"displayName": "Referral Code",
			"name": "referralCode",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "referralCode",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Smart Order Routing"
					],
					"operation": [
						"Swap V 3 Sor Swap V 3 Post"
					]
				}
			}
		},
		{
			"displayName": "Referral Fee",
			"name": "referralFee",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "referralFee",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Smart Order Routing"
					],
					"operation": [
						"Swap V 3 Sor Swap V 3 Post"
					]
				}
			}
		},
		{
			"displayName": "Referral Fee Recipient",
			"name": "referralFeeRecipient",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "referralFeeRecipient",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Smart Order Routing"
					],
					"operation": [
						"Swap V 3 Sor Swap V 3 Post"
					]
				}
			}
		},
		{
			"displayName": "Compact",
			"name": "compact",
			"type": "boolean",
			"default": true,
			"routing": {
				"send": {
					"property": "compact",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Smart Order Routing"
					],
					"operation": [
						"Swap V 3 Sor Swap V 3 Post"
					]
				}
			}
		},
		{
			"displayName": "Like Asset",
			"name": "likeAsset",
			"type": "boolean",
			"default": true,
			"routing": {
				"send": {
					"property": "likeAsset",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Smart Order Routing"
					],
					"operation": [
						"Swap V 3 Sor Swap V 3 Post"
					]
				}
			}
		},
		{
			"displayName": "Simple",
			"name": "simple",
			"type": "boolean",
			"default": true,
			"routing": {
				"send": {
					"property": "simple",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Smart Order Routing"
					],
					"operation": [
						"Swap V 3 Sor Swap V 3 Post"
					]
				}
			}
		},
		{
			"displayName": "Permit 2",
			"name": "permit2",
			"type": "boolean",
			"default": true,
			"routing": {
				"send": {
					"property": "permit2",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Smart Order Routing"
					],
					"operation": [
						"Swap V 3 Sor Swap V 3 Post"
					]
				}
			}
		},
		{
			"displayName": "Simulate",
			"name": "simulate",
			"type": "boolean",
			"default": true,
			"routing": {
				"send": {
					"property": "simulate",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Smart Order Routing"
					],
					"operation": [
						"Swap V 3 Sor Swap V 3 Post"
					]
				}
			}
		},
		{
			"displayName": "Receiver",
			"name": "receiver",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "receiver",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Smart Order Routing"
					],
					"operation": [
						"Swap V 3 Sor Swap V 3 Post"
					]
				}
			}
		},
		{
			"displayName": "POST /sor/quote/v3",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Smart Order Routing"
					],
					"operation": [
						"Quote V 3 Sor Quote V 3 Post"
					]
				}
			}
		},
		{
			"displayName": "Deprecated",
			"name": "deprecated",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "deprecated",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Smart Order Routing"
					],
					"operation": [
						"Quote V 3 Sor Quote V 3 Post"
					]
				}
			}
		},
		{
			"displayName": "Trace Id",
			"name": "traceId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "traceId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Smart Order Routing"
					],
					"operation": [
						"Quote V 3 Sor Quote V 3 Post"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Chain Id",
			"name": "chainId",
			"type": "number",
			"default": 0,
			"description": "Chain ID to request path for",
			"routing": {
				"send": {
					"property": "chainId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Smart Order Routing"
					],
					"operation": [
						"Quote V 3 Sor Quote V 3 Post"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Input Tokens",
			"name": "inputTokens",
			"type": "json",
			"default": "[\n  {}\n]",
			"description": "Input tokens and amounts for quote",
			"routing": {
				"send": {
					"property": "inputTokens",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Smart Order Routing"
					],
					"operation": [
						"Quote V 3 Sor Quote V 3 Post"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Output Tokens",
			"name": "outputTokens",
			"type": "json",
			"default": "[\n  {\n    \"proportion\": 1\n  }\n]",
			"description": "Output tokens and proportions for quote",
			"routing": {
				"send": {
					"property": "outputTokens",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Smart Order Routing"
					],
					"operation": [
						"Quote V 3 Sor Quote V 3 Post"
					]
				}
			}
		},
		{
			"displayName": "Gas Price",
			"name": "gasPrice",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "gasPrice",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Smart Order Routing"
					],
					"operation": [
						"Quote V 3 Sor Quote V 3 Post"
					]
				}
			}
		},
		{
			"displayName": "User Addr",
			"name": "userAddr",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "userAddr",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Smart Order Routing"
					],
					"operation": [
						"Quote V 3 Sor Quote V 3 Post"
					]
				}
			}
		},
		{
			"displayName": "Slippage Limit Percent",
			"name": "slippageLimitPercent",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "slippageLimitPercent",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Smart Order Routing"
					],
					"operation": [
						"Quote V 3 Sor Quote V 3 Post"
					]
				}
			}
		},
		{
			"displayName": "Source Blacklist",
			"name": "sourceBlacklist",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "sourceBlacklist",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Smart Order Routing"
					],
					"operation": [
						"Quote V 3 Sor Quote V 3 Post"
					]
				}
			}
		},
		{
			"displayName": "Source Whitelist",
			"name": "sourceWhitelist",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "sourceWhitelist",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Smart Order Routing"
					],
					"operation": [
						"Quote V 3 Sor Quote V 3 Post"
					]
				}
			}
		},
		{
			"displayName": "Pool Blacklist",
			"name": "poolBlacklist",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "poolBlacklist",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Smart Order Routing"
					],
					"operation": [
						"Quote V 3 Sor Quote V 3 Post"
					]
				}
			}
		},
		{
			"displayName": "Path Viz",
			"name": "pathViz",
			"type": "boolean",
			"default": true,
			"routing": {
				"send": {
					"property": "pathViz",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Smart Order Routing"
					],
					"operation": [
						"Quote V 3 Sor Quote V 3 Post"
					]
				}
			}
		},
		{
			"displayName": "Path Viz Image",
			"name": "pathVizImage",
			"type": "boolean",
			"default": true,
			"routing": {
				"send": {
					"property": "pathVizImage",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Smart Order Routing"
					],
					"operation": [
						"Quote V 3 Sor Quote V 3 Post"
					]
				}
			}
		},
		{
			"displayName": "Path Viz Image Config",
			"name": "pathVizImageConfig",
			"type": "json",
			"default": "{\n  \"linkColors\": [\n    null\n  ]\n}",
			"description": "Schema for path viz image config",
			"routing": {
				"send": {
					"property": "pathVizImageConfig",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Smart Order Routing"
					],
					"operation": [
						"Quote V 3 Sor Quote V 3 Post"
					]
				}
			}
		},
		{
			"displayName": "Disable RF Qs",
			"name": "disableRFQs",
			"type": "boolean",
			"default": true,
			"routing": {
				"send": {
					"property": "disableRFQs",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Smart Order Routing"
					],
					"operation": [
						"Quote V 3 Sor Quote V 3 Post"
					]
				}
			}
		},
		{
			"displayName": "Referral Code",
			"name": "referralCode",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "referralCode",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Smart Order Routing"
					],
					"operation": [
						"Quote V 3 Sor Quote V 3 Post"
					]
				}
			}
		},
		{
			"displayName": "Referral Fee",
			"name": "referralFee",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "referralFee",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Smart Order Routing"
					],
					"operation": [
						"Quote V 3 Sor Quote V 3 Post"
					]
				}
			}
		},
		{
			"displayName": "Referral Fee Recipient",
			"name": "referralFeeRecipient",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "referralFeeRecipient",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Smart Order Routing"
					],
					"operation": [
						"Quote V 3 Sor Quote V 3 Post"
					]
				}
			}
		},
		{
			"displayName": "Compact",
			"name": "compact",
			"type": "boolean",
			"default": true,
			"routing": {
				"send": {
					"property": "compact",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Smart Order Routing"
					],
					"operation": [
						"Quote V 3 Sor Quote V 3 Post"
					]
				}
			}
		},
		{
			"displayName": "Like Asset",
			"name": "likeAsset",
			"type": "boolean",
			"default": true,
			"routing": {
				"send": {
					"property": "likeAsset",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Smart Order Routing"
					],
					"operation": [
						"Quote V 3 Sor Quote V 3 Post"
					]
				}
			}
		},
		{
			"displayName": "Simple",
			"name": "simple",
			"type": "boolean",
			"default": true,
			"routing": {
				"send": {
					"property": "simple",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Smart Order Routing"
					],
					"operation": [
						"Quote V 3 Sor Quote V 3 Post"
					]
				}
			}
		},
		{
			"displayName": "Permit 2",
			"name": "permit2",
			"type": "boolean",
			"default": true,
			"routing": {
				"send": {
					"property": "permit2",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Smart Order Routing"
					],
					"operation": [
						"Quote V 3 Sor Quote V 3 Post"
					]
				}
			}
		},
		{
			"displayName": "POST /sor/quote/v3/zap",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Smart Order Routing"
					],
					"operation": [
						"Quote Zap V 3 Sor Quote V 3 Zap Post"
					]
				}
			}
		},
		{
			"displayName": "Deprecated",
			"name": "deprecated",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "deprecated",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Smart Order Routing"
					],
					"operation": [
						"Quote Zap V 3 Sor Quote V 3 Zap Post"
					]
				}
			}
		},
		{
			"displayName": "Trace Id",
			"name": "traceId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "traceId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Smart Order Routing"
					],
					"operation": [
						"Quote Zap V 3 Sor Quote V 3 Zap Post"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Chain Id",
			"name": "chainId",
			"type": "number",
			"default": 0,
			"description": "Chain ID to request path for",
			"routing": {
				"send": {
					"property": "chainId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Smart Order Routing"
					],
					"operation": [
						"Quote Zap V 3 Sor Quote V 3 Zap Post"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Input Tokens",
			"name": "inputTokens",
			"type": "json",
			"default": "[\n  {}\n]",
			"description": "Input tokens and amounts for quote",
			"routing": {
				"send": {
					"property": "inputTokens",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Smart Order Routing"
					],
					"operation": [
						"Quote Zap V 3 Sor Quote V 3 Zap Post"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Output Tokens",
			"name": "outputTokens",
			"type": "json",
			"default": "[\n  {\n    \"proportion\": 1\n  }\n]",
			"description": "Output tokens and proportions for quote",
			"routing": {
				"send": {
					"property": "outputTokens",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Smart Order Routing"
					],
					"operation": [
						"Quote Zap V 3 Sor Quote V 3 Zap Post"
					]
				}
			}
		},
		{
			"displayName": "Gas Price",
			"name": "gasPrice",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "gasPrice",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Smart Order Routing"
					],
					"operation": [
						"Quote Zap V 3 Sor Quote V 3 Zap Post"
					]
				}
			}
		},
		{
			"displayName": "User Addr",
			"name": "userAddr",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "userAddr",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Smart Order Routing"
					],
					"operation": [
						"Quote Zap V 3 Sor Quote V 3 Zap Post"
					]
				}
			}
		},
		{
			"displayName": "Slippage Limit Percent",
			"name": "slippageLimitPercent",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "slippageLimitPercent",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Smart Order Routing"
					],
					"operation": [
						"Quote Zap V 3 Sor Quote V 3 Zap Post"
					]
				}
			}
		},
		{
			"displayName": "Source Blacklist",
			"name": "sourceBlacklist",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "sourceBlacklist",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Smart Order Routing"
					],
					"operation": [
						"Quote Zap V 3 Sor Quote V 3 Zap Post"
					]
				}
			}
		},
		{
			"displayName": "Source Whitelist",
			"name": "sourceWhitelist",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "sourceWhitelist",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Smart Order Routing"
					],
					"operation": [
						"Quote Zap V 3 Sor Quote V 3 Zap Post"
					]
				}
			}
		},
		{
			"displayName": "Pool Blacklist",
			"name": "poolBlacklist",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "poolBlacklist",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Smart Order Routing"
					],
					"operation": [
						"Quote Zap V 3 Sor Quote V 3 Zap Post"
					]
				}
			}
		},
		{
			"displayName": "Path Viz",
			"name": "pathViz",
			"type": "boolean",
			"default": true,
			"routing": {
				"send": {
					"property": "pathViz",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Smart Order Routing"
					],
					"operation": [
						"Quote Zap V 3 Sor Quote V 3 Zap Post"
					]
				}
			}
		},
		{
			"displayName": "Path Viz Image",
			"name": "pathVizImage",
			"type": "boolean",
			"default": true,
			"routing": {
				"send": {
					"property": "pathVizImage",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Smart Order Routing"
					],
					"operation": [
						"Quote Zap V 3 Sor Quote V 3 Zap Post"
					]
				}
			}
		},
		{
			"displayName": "Path Viz Image Config",
			"name": "pathVizImageConfig",
			"type": "json",
			"default": "{\n  \"linkColors\": [\n    null\n  ]\n}",
			"description": "Schema for path viz image config",
			"routing": {
				"send": {
					"property": "pathVizImageConfig",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Smart Order Routing"
					],
					"operation": [
						"Quote Zap V 3 Sor Quote V 3 Zap Post"
					]
				}
			}
		},
		{
			"displayName": "Disable RF Qs",
			"name": "disableRFQs",
			"type": "boolean",
			"default": true,
			"routing": {
				"send": {
					"property": "disableRFQs",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Smart Order Routing"
					],
					"operation": [
						"Quote Zap V 3 Sor Quote V 3 Zap Post"
					]
				}
			}
		},
		{
			"displayName": "Referral Code",
			"name": "referralCode",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "referralCode",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Smart Order Routing"
					],
					"operation": [
						"Quote Zap V 3 Sor Quote V 3 Zap Post"
					]
				}
			}
		},
		{
			"displayName": "Referral Fee",
			"name": "referralFee",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "referralFee",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Smart Order Routing"
					],
					"operation": [
						"Quote Zap V 3 Sor Quote V 3 Zap Post"
					]
				}
			}
		},
		{
			"displayName": "Referral Fee Recipient",
			"name": "referralFeeRecipient",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "referralFeeRecipient",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Smart Order Routing"
					],
					"operation": [
						"Quote Zap V 3 Sor Quote V 3 Zap Post"
					]
				}
			}
		},
		{
			"displayName": "Compact",
			"name": "compact",
			"type": "boolean",
			"default": true,
			"routing": {
				"send": {
					"property": "compact",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Smart Order Routing"
					],
					"operation": [
						"Quote Zap V 3 Sor Quote V 3 Zap Post"
					]
				}
			}
		},
		{
			"displayName": "Like Asset",
			"name": "likeAsset",
			"type": "boolean",
			"default": true,
			"routing": {
				"send": {
					"property": "likeAsset",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Smart Order Routing"
					],
					"operation": [
						"Quote Zap V 3 Sor Quote V 3 Zap Post"
					]
				}
			}
		},
		{
			"displayName": "Simple",
			"name": "simple",
			"type": "boolean",
			"default": true,
			"routing": {
				"send": {
					"property": "simple",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Smart Order Routing"
					],
					"operation": [
						"Quote Zap V 3 Sor Quote V 3 Zap Post"
					]
				}
			}
		},
		{
			"displayName": "Permit 2",
			"name": "permit2",
			"type": "boolean",
			"default": true,
			"routing": {
				"send": {
					"property": "permit2",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Smart Order Routing"
					],
					"operation": [
						"Quote Zap V 3 Sor Quote V 3 Zap Post"
					]
				}
			}
		},
		{
			"displayName": "POST /sor/quote/v2",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Smart Order Routing"
					],
					"operation": [
						"Quote Sor Quote V 2 Post"
					]
				}
			}
		},
		{
			"displayName": "Deprecated",
			"name": "deprecated",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "deprecated",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Smart Order Routing"
					],
					"operation": [
						"Quote Sor Quote V 2 Post"
					]
				}
			}
		},
		{
			"displayName": "Trace Id",
			"name": "traceId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "traceId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Smart Order Routing"
					],
					"operation": [
						"Quote Sor Quote V 2 Post"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Chain Id",
			"name": "chainId",
			"type": "number",
			"default": 0,
			"description": "Chain ID to request path for",
			"routing": {
				"send": {
					"property": "chainId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Smart Order Routing"
					],
					"operation": [
						"Quote Sor Quote V 2 Post"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Input Tokens",
			"name": "inputTokens",
			"type": "json",
			"default": "[\n  {}\n]",
			"description": "Input tokens and amounts for quote",
			"routing": {
				"send": {
					"property": "inputTokens",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Smart Order Routing"
					],
					"operation": [
						"Quote Sor Quote V 2 Post"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Output Tokens",
			"name": "outputTokens",
			"type": "json",
			"default": "[\n  {\n    \"proportion\": 1\n  }\n]",
			"description": "Output tokens and proportions for quote",
			"routing": {
				"send": {
					"property": "outputTokens",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Smart Order Routing"
					],
					"operation": [
						"Quote Sor Quote V 2 Post"
					]
				}
			}
		},
		{
			"displayName": "Gas Price",
			"name": "gasPrice",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "gasPrice",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Smart Order Routing"
					],
					"operation": [
						"Quote Sor Quote V 2 Post"
					]
				}
			}
		},
		{
			"displayName": "User Addr",
			"name": "userAddr",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "userAddr",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Smart Order Routing"
					],
					"operation": [
						"Quote Sor Quote V 2 Post"
					]
				}
			}
		},
		{
			"displayName": "Slippage Limit Percent",
			"name": "slippageLimitPercent",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "slippageLimitPercent",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Smart Order Routing"
					],
					"operation": [
						"Quote Sor Quote V 2 Post"
					]
				}
			}
		},
		{
			"displayName": "Source Blacklist",
			"name": "sourceBlacklist",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "sourceBlacklist",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Smart Order Routing"
					],
					"operation": [
						"Quote Sor Quote V 2 Post"
					]
				}
			}
		},
		{
			"displayName": "Source Whitelist",
			"name": "sourceWhitelist",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "sourceWhitelist",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Smart Order Routing"
					],
					"operation": [
						"Quote Sor Quote V 2 Post"
					]
				}
			}
		},
		{
			"displayName": "Pool Blacklist",
			"name": "poolBlacklist",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "poolBlacklist",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Smart Order Routing"
					],
					"operation": [
						"Quote Sor Quote V 2 Post"
					]
				}
			}
		},
		{
			"displayName": "Path Viz",
			"name": "pathViz",
			"type": "boolean",
			"default": true,
			"routing": {
				"send": {
					"property": "pathViz",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Smart Order Routing"
					],
					"operation": [
						"Quote Sor Quote V 2 Post"
					]
				}
			}
		},
		{
			"displayName": "Path Viz Image",
			"name": "pathVizImage",
			"type": "boolean",
			"default": true,
			"routing": {
				"send": {
					"property": "pathVizImage",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Smart Order Routing"
					],
					"operation": [
						"Quote Sor Quote V 2 Post"
					]
				}
			}
		},
		{
			"displayName": "Path Viz Image Config",
			"name": "pathVizImageConfig",
			"type": "json",
			"default": "{\n  \"linkColors\": [\n    null\n  ]\n}",
			"description": "Schema for path viz image config",
			"routing": {
				"send": {
					"property": "pathVizImageConfig",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Smart Order Routing"
					],
					"operation": [
						"Quote Sor Quote V 2 Post"
					]
				}
			}
		},
		{
			"displayName": "Disable RF Qs",
			"name": "disableRFQs",
			"type": "boolean",
			"default": true,
			"routing": {
				"send": {
					"property": "disableRFQs",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Smart Order Routing"
					],
					"operation": [
						"Quote Sor Quote V 2 Post"
					]
				}
			}
		},
		{
			"displayName": "Referral Code",
			"name": "referralCode",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "referralCode",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Smart Order Routing"
					],
					"operation": [
						"Quote Sor Quote V 2 Post"
					]
				}
			}
		},
		{
			"displayName": "Compact",
			"name": "compact",
			"type": "boolean",
			"default": true,
			"routing": {
				"send": {
					"property": "compact",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Smart Order Routing"
					],
					"operation": [
						"Quote Sor Quote V 2 Post"
					]
				}
			}
		},
		{
			"displayName": "Like Asset",
			"name": "likeAsset",
			"type": "boolean",
			"default": true,
			"routing": {
				"send": {
					"property": "likeAsset",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Smart Order Routing"
					],
					"operation": [
						"Quote Sor Quote V 2 Post"
					]
				}
			}
		},
		{
			"displayName": "Simple",
			"name": "simple",
			"type": "boolean",
			"default": true,
			"routing": {
				"send": {
					"property": "simple",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Smart Order Routing"
					],
					"operation": [
						"Quote Sor Quote V 2 Post"
					]
				}
			}
		},
		{
			"displayName": "POST /sor/quote/v2/zap",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Smart Order Routing"
					],
					"operation": [
						"Quote Zap Sor Quote V 2 Zap Post"
					]
				}
			}
		},
		{
			"displayName": "Deprecated",
			"name": "deprecated",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "deprecated",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Smart Order Routing"
					],
					"operation": [
						"Quote Zap Sor Quote V 2 Zap Post"
					]
				}
			}
		},
		{
			"displayName": "Trace Id",
			"name": "traceId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "traceId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Smart Order Routing"
					],
					"operation": [
						"Quote Zap Sor Quote V 2 Zap Post"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Chain Id",
			"name": "chainId",
			"type": "number",
			"default": 0,
			"description": "Chain ID to request path for",
			"routing": {
				"send": {
					"property": "chainId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Smart Order Routing"
					],
					"operation": [
						"Quote Zap Sor Quote V 2 Zap Post"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Input Tokens",
			"name": "inputTokens",
			"type": "json",
			"default": "[\n  {}\n]",
			"description": "Input tokens and amounts for quote",
			"routing": {
				"send": {
					"property": "inputTokens",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Smart Order Routing"
					],
					"operation": [
						"Quote Zap Sor Quote V 2 Zap Post"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Output Tokens",
			"name": "outputTokens",
			"type": "json",
			"default": "[\n  {\n    \"proportion\": 1\n  }\n]",
			"description": "Output tokens and proportions for quote",
			"routing": {
				"send": {
					"property": "outputTokens",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Smart Order Routing"
					],
					"operation": [
						"Quote Zap Sor Quote V 2 Zap Post"
					]
				}
			}
		},
		{
			"displayName": "Gas Price",
			"name": "gasPrice",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "gasPrice",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Smart Order Routing"
					],
					"operation": [
						"Quote Zap Sor Quote V 2 Zap Post"
					]
				}
			}
		},
		{
			"displayName": "User Addr",
			"name": "userAddr",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "userAddr",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Smart Order Routing"
					],
					"operation": [
						"Quote Zap Sor Quote V 2 Zap Post"
					]
				}
			}
		},
		{
			"displayName": "Slippage Limit Percent",
			"name": "slippageLimitPercent",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "slippageLimitPercent",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Smart Order Routing"
					],
					"operation": [
						"Quote Zap Sor Quote V 2 Zap Post"
					]
				}
			}
		},
		{
			"displayName": "Source Blacklist",
			"name": "sourceBlacklist",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "sourceBlacklist",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Smart Order Routing"
					],
					"operation": [
						"Quote Zap Sor Quote V 2 Zap Post"
					]
				}
			}
		},
		{
			"displayName": "Source Whitelist",
			"name": "sourceWhitelist",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "sourceWhitelist",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Smart Order Routing"
					],
					"operation": [
						"Quote Zap Sor Quote V 2 Zap Post"
					]
				}
			}
		},
		{
			"displayName": "Pool Blacklist",
			"name": "poolBlacklist",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "poolBlacklist",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Smart Order Routing"
					],
					"operation": [
						"Quote Zap Sor Quote V 2 Zap Post"
					]
				}
			}
		},
		{
			"displayName": "Path Viz",
			"name": "pathViz",
			"type": "boolean",
			"default": true,
			"routing": {
				"send": {
					"property": "pathViz",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Smart Order Routing"
					],
					"operation": [
						"Quote Zap Sor Quote V 2 Zap Post"
					]
				}
			}
		},
		{
			"displayName": "Path Viz Image",
			"name": "pathVizImage",
			"type": "boolean",
			"default": true,
			"routing": {
				"send": {
					"property": "pathVizImage",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Smart Order Routing"
					],
					"operation": [
						"Quote Zap Sor Quote V 2 Zap Post"
					]
				}
			}
		},
		{
			"displayName": "Path Viz Image Config",
			"name": "pathVizImageConfig",
			"type": "json",
			"default": "{\n  \"linkColors\": [\n    null\n  ]\n}",
			"description": "Schema for path viz image config",
			"routing": {
				"send": {
					"property": "pathVizImageConfig",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Smart Order Routing"
					],
					"operation": [
						"Quote Zap Sor Quote V 2 Zap Post"
					]
				}
			}
		},
		{
			"displayName": "Disable RF Qs",
			"name": "disableRFQs",
			"type": "boolean",
			"default": true,
			"routing": {
				"send": {
					"property": "disableRFQs",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Smart Order Routing"
					],
					"operation": [
						"Quote Zap Sor Quote V 2 Zap Post"
					]
				}
			}
		},
		{
			"displayName": "Referral Code",
			"name": "referralCode",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "referralCode",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Smart Order Routing"
					],
					"operation": [
						"Quote Zap Sor Quote V 2 Zap Post"
					]
				}
			}
		},
		{
			"displayName": "Compact",
			"name": "compact",
			"type": "boolean",
			"default": true,
			"routing": {
				"send": {
					"property": "compact",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Smart Order Routing"
					],
					"operation": [
						"Quote Zap Sor Quote V 2 Zap Post"
					]
				}
			}
		},
		{
			"displayName": "Like Asset",
			"name": "likeAsset",
			"type": "boolean",
			"default": true,
			"routing": {
				"send": {
					"property": "likeAsset",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Smart Order Routing"
					],
					"operation": [
						"Quote Zap Sor Quote V 2 Zap Post"
					]
				}
			}
		},
		{
			"displayName": "Simple",
			"name": "simple",
			"type": "boolean",
			"default": true,
			"routing": {
				"send": {
					"property": "simple",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Smart Order Routing"
					],
					"operation": [
						"Quote Zap Sor Quote V 2 Zap Post"
					]
				}
			}
		},
		{
			"displayName": "POST /sor/assemble",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Smart Order Routing"
					],
					"operation": [
						"Assemble Sor Assemble Post"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "User Addr",
			"name": "userAddr",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "userAddr",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Smart Order Routing"
					],
					"operation": [
						"Assemble Sor Assemble Post"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Path Id",
			"name": "pathId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "pathId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Smart Order Routing"
					],
					"operation": [
						"Assemble Sor Assemble Post"
					]
				}
			}
		},
		{
			"displayName": "Simulate",
			"name": "simulate",
			"type": "boolean",
			"default": true,
			"routing": {
				"send": {
					"property": "simulate",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Smart Order Routing"
					],
					"operation": [
						"Assemble Sor Assemble Post"
					]
				}
			}
		},
		{
			"displayName": "Receiver",
			"name": "receiver",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "receiver",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Smart Order Routing"
					],
					"operation": [
						"Assemble Sor Assemble Post"
					]
				}
			}
		},
		{
			"displayName": "Permit 2 Signature",
			"name": "permit2Signature",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "permit2Signature",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Smart Order Routing"
					],
					"operation": [
						"Assemble Sor Assemble Post"
					]
				}
			}
		},
];
