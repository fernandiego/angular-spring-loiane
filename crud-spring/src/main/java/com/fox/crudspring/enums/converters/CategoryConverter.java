package com.fox.crudspring.enums.converters;

import com.fox.crudspring.enums.Category;
import jakarta.persistence.AttributeConverter;

import java.util.stream.Stream;

public class CategoryConverter implements AttributeConverter<Category, String> {

    @Override
    public String convertToDatabaseColumn(Category category) {
      if (category == null){
        return null;
      }
        return category.getValue();
    }

    @Override
    public Category convertToEntityAttribute(String value) {
        if (value == null) {
            return null;
        }
        return Stream.of(Category.values())
                .filter(c -> c.getValue().equals(value))
                .findFirst()
                .orElseThrow(IllegalArgumentException::new);
    }
}
