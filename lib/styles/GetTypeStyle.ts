import { getStyles, cssRule } from 'typestyle';

export const getTypeStyle = () => {
    const marginPaddingComponents = `html, body, div, object,
    iframe, h1, h2, h3, h4, h5, h6,
    p, blockquote, ol, ul, li, form,
    legend, label, table, header,
    footer, nav, section, figure`;
    cssRule(marginPaddingComponents, {
        margin: 0,
        padding: 0,
    });

    cssRule('.ant-btn, button', {
        cursor: 'default',
    })
    return getStyles();
};
