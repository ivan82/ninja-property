var NinjaProperty = {
	value: function(object, propertyPath, newValue){
		var propertyValueObject = this.valueObject(object, propertyPath, newValue);
		return propertyValueObject.success ? propertyValueObject.value : undefined;
	},

	valueObject: function(object, propertyPath, newValue){
		var pathArray = this.getPathArray(propertyPath);
		if(!pathArray || pathArray.length === 0){ return undefined; }
		return this.valueObjectByPathArray(object, pathArray, newValue);
	},

	/*
	returns property object: { success: [true|false], value: [the value of the prop|the new value] }
	*/
	valueObjectByPathArray: function(object, pathArray, newValue){
		if(!object){ object = this; }
		if(!pathArray){ return; }

		for(var i = 0, len = pathArray.length; i < len; i++){
			if(newValue !== undefined && i === len - 1){
				object[pathArray[i]] = newValue;
				return {success: true, value: newValue};
			}
			object = object[pathArray[i]];

			//we havent reached the end of the object pathArray, the property name is not defined
			if(object === undefined && i !== len){
				return { success: false, value: undefined };
			}
		}
		return { success: true, value: object };
	},

	getPathArray: function(propertyPath){
		var pathArray = propertyPath.match(/\w+/g);
		if(!pathArray){ return; }

		//fixes the integers in the path array
		var i = pathArray.length;
		while(i--){
			if(!isNaN(pathArray[i])){ pathArray[i] = parseInt(pathArray[i]); }
		}

		return pathArray;
	}
};
