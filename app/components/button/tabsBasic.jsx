import React, { useState } from "react";
import {
  TETabs,
  TETabsContent,
  TETabsItem,
  TETabsPane,
} from "tw-elements-react";

export default function TabsBasic() {

  const [fillActive, setFillActive] = useState("tab1");

  const handleFillClick = (value) => {
    if (value === fillActive) {
      return;
    }
    setFillActive(value);
  };

  return (
    <div className="mb-3 ml-5">
      <TETabs>
        <TETabsItem
          onClick={() => handleFillClick("tab1")}
          active={fillActive === "tab1"}
        >
          Description
        </TETabsItem>
        <TETabsItem
          onClick={() => handleFillClick("tab2")}
          active={fillActive === "tab2"}
        >
          Reviews
        </TETabsItem>
      </TETabs>
      <TETabsContent>
        <TETabsPane  show={fillActive === "tab1"}>
          <ul className="w-[40rem]">
            <li className="w-full border-b-2 border-neutral-100 border-opacity-100 py-4 dark:border-opacity-50">
              The Real Snail Essence: Formulated with 96.3% Snail Secretion Filtrate, this essence repairs and rejuvenates the skin from dryness and aging. It improves skin vitality by reducing dullness and soothing dehydrated skin.
            </li>
            <li className="w-full border-b-2 border-neutral-100 border-opacity-100 py-4 dark:border-opacity-50">
              The Real Snail Essence: Formulated with 96.3% Snail Secretion Filtrate, this essence repairs and rejuvenates the skin from dryness and aging. It improves skin vitality by reducing dullness and soothing dehydrated skin.
            </li>
            <li className="w-full border-b-2 border-neutral-100 border-opacity-100 py-4 dark:border-opacity-50">
              Key Ingredient: Snail Secretion Filtrate contains "Mucin"- an EFFECTIVE ingredient for enhanced moisturization. It instantly soothes damaged skin and delivers moisture deep into your skin. Perfect for dehydrated and damaged skin.
            </li>
            <li className="w-full border-b-2 border-neutral-100 border-opacity-100 py-4 dark:border-opacity-50">
              Key Ingredient: Snail Secretion Filtrate contains "Mucin"- an EFFECTIVE ingredient for enhanced moisturization. It instantly soothes damaged skin and delivers moisture deep into your skin. Perfect for dehydrated and damaged skin.
            </li>
            <li className="w-full py-4">Key Ingredient: Snail Secretion Filtrate contains "Mucin"- an EFFECTIVE ingredient for enhanced moisturization. It instantly soothes damaged skin and delivers moisture deep into your skin. Perfect for dehydrated and damaged skin.</li>
          </ul>
        </TETabsPane>
        <TETabsPane show={fillActive === "tab2"}>Tab 2 content</TETabsPane>
        <TETabsPane show={fillActive === "tab3"}>Tab 3 content</TETabsPane>
        <TETabsPane show={fillActive === "tab4"}>Tab 4 content</TETabsPane>
      </TETabsContent>
    </div>
  );
}