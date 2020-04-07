import React, {useState} from 'react';
import { View, Text, TextInput, StyleSheet, Button } from 'react-native';


const BlogPostForm = ( { onSubmit, initialValues } ) => {
    const [title, setTitle] = useState(initialValues.title);
    const [content, setContent] = useState(initialValues.content);

    return <View>
        <Text style={styles.label}>Enter Title:</Text>
        <TextInput style={styles.input} value={title} onChangeText={(text) => setTitle(text)} />
        <Text style={styles.label}>Enter Content:</Text>
        <TextInput style={styles.input} value={content} onChangeText={(content) => setTitle(content)} />
        <Button
            title="Save blog post"
            onPress={() => onSubmit(title, content)}
        />
    </View>
};

BlogPostForm.defaultProps = {
    initialValues: {
        title: '',
        content: '',
    }
};

const styles = StyleSheet.create({
    input: {
        fontSize: 18,
        borderWidth: 1,
        borderColor: 'black',
        marginBottom: 15,
        padding: 10,
        margin: 10
    },
    label: {
        fontSize: 20,
        marginBottom: 18
    }
});

export default BlogPostForm;