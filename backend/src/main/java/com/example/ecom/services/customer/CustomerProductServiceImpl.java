package com.example.ecom.services.customer;

import com.example.ecom.dto.ProductDto;
import com.example.ecom.entity.Product;
import com.example.ecom.repository.ProductRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class CustomerProductServiceImpl implements CustomerProductService{

private final ProductRepository productRepository;

    public List<ProductDto> getAllProducts() {

        List<Product> products = productRepository.findAll();
        return products.stream().map(Product::getDto).collect(Collectors.toList());

    }


    public List<ProductDto> searchProductsByTitle(String name) {

//        List<Product> products = productRepository.findAllByNameContaining(name);
        List<Product> products = productRepository.findAll();
        return products.stream().map(Product::getDto).collect(Collectors.toList());

    }
}
