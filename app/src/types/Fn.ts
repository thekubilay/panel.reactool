export function makeProperty<PropertyName extends string, AssignedType>(
  value: AssignedType,
  propertyName: PropertyName
) {

  type ReturnType = {
    [K in PropertyName]: AssignedType
  };
  // equivalent to Record<PropertyName, AssignedType>

  return {
    [propertyName]: value
  } as ReturnType;

}
