# ninjaproperty
Creates, extracts or sets the object property value by providing a path.

## Read
Read a property value
```html
NinjaProperty.value(object, propertyPath)
```
## Write
Write a property value
```html
NinjaProperty.value(object, propertyPath, newValue)
```

## Property path
Property path can be written in following ways
```html
property.child.child.child
```
or
```html
property.child[2].child
```
There is no depth limit


Example object for read and write
```html
var obj = {
    a: 'a',
    b:'b',
    c: {
        c1: 'c1',
        c2: 'c2'
    },
    d: ['arr1', 'arr2', 'arr3'],
    e: [{e1: 'e1'}, {e2: 'e2'}]
};
```



Read
```html
NinjaProperty.value(obj, 'a');      //returns 'a'
NinjaProperty.value(obj, 'c.c1');   //returns 'c1'
NinjaProperty.value(obj, 'c.c2');   //returns 'c2'
NinjaProperty.value(obj, 'd[2]');   //returns 'arr3'
NinjaProperty.value(obj, 'e[1].e2'); //returns 'e2'
```

Write
```html
NinjaProperty.value(obj, 'f', {f1: 'f1', f2: 'f2'});
```

# Example

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Property</title>
</head>
<body>

<script src="ninja-property.js"></script>

<script>
var obj = { a : 1, b : {c: 2} };
console.log(NinjaProperty.value(obj, 'b.c'));

NinjaProperty.valueObjectByPathArray(obj, 'd', {e: 4});
console.log(NinjaProperty.value(obj, 'd.e'));
</script>

</body>
</html>
```
