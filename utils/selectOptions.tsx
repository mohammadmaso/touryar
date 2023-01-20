export const createSelectorOptions = (nameString = 'name', input: any): [] => {
  let options = input.map((item: any) => ({
    value: item.node?.id,
    label:
      nameString == 'title'
        ? item.node?.title
        : nameString == 'titleFa'
        ? item.node?.titleFa
        : item.node?.name,
  }));

  return options;
};
