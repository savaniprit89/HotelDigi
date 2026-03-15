# Mushroom Classification using CNN and CNN + SVM

This project classifies mushroom images into 9 different classes using:

1. **CNN-based image classification**
2. **CNN feature extractor + SVM classifier**

The project is built with **TensorFlow/Keras**, **scikit-learn**, and **Python**.

---

## Classes

The dataset contains the following mushroom classes:

- Agaricus
- Amanita
- Boletus
- Cortinarius
- Entoloma
- Hygrocybe
- Lactarius
- Russula
- Suillus

---

## Project Structure

```bash
.
├── Classification.py              # Test CNN classification model
├── SVM.py                         # Test CNN feature extractor + SVM model
├── train_model.py                 # Train CNN model and SVM model
├── mushrooms_test.csv             # CSV file containing test image paths and labels
├── mushroom_classifier_model.keras # Saved CNN model
├── mushroom_svm_model.pkl         # Saved SVM model
└── README.md
