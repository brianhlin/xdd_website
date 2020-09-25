/******************************************************************************\
|                                                                              |
|                                 journals.js                                  |
|                                                                              |
|******************************************************************************|
|                                                                              |
|        This file defines a collection of search results.                     |
|                                                                              |
|        Author(s): Abe Megahed                                                |
|                                                                              |
|        This file is subject to the terms and conditions defined in           |
|        'LICENSE.txt', which is part of this source code distribution.        |
|                                                                              |
|******************************************************************************|
|        Copyright (C) 2012-2020 Morgridge Institute for Research (MIR)        |
\******************************************************************************/

define([
	'models/journal',
	'collections/base-collection'
], function(Journal, BaseCollection) {
	'use strict';
	
	return BaseCollection.extend({

		//
		// attributes
		//

		model: Journal
	});
});
