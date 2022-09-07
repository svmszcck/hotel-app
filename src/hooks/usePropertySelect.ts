import { useContextSelector } from "use-context-selector";

import GlobalContext from "contexts/GlobalContext";

const usePropertySelect = () => {
  const activeProperty = useContextSelector(GlobalContext, (state) => {
    const { properties, activeProperty } = state;
    return properties.find((property) => property.id === activeProperty);
  });

  return activeProperty;
};

export default usePropertySelect;
