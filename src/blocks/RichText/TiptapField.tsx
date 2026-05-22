"use client";

import React from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import TextAlign from "@tiptap/extension-text-align";
import { 
    Bold, Italic, List, ListOrdered, Quote, Heading1, Heading2, Code, Undo, Redo,
    AlignLeft, AlignCenter, AlignRight, AlignJustify
} from "lucide-react";

interface TiptapFieldProps {
    value: string;
    onChange: (_val: string) => void;
}

const MenuBar = ({ editor }: { editor: any }) => {
    if (!editor) return null;

    const items = [
        { icon: Bold, action: () => editor.chain().focus().toggleBold().run(), active: "bold" },
        { icon: Italic, action: () => editor.chain().focus().toggleItalic().run(), active: "italic" },
        { icon: Heading1, action: () => editor.chain().focus().toggleHeading({ level: 1 }).run(), active: { heading: { level: 1 } } },
        { icon: Heading2, action: () => editor.chain().focus().toggleHeading({ level: 2 }).run(), active: { heading: { level: 2 } } },
        { icon: List, action: () => editor.chain().focus().toggleBulletList().run(), active: "bulletList" },
        { icon: ListOrdered, action: () => editor.chain().focus().toggleOrderedList().run(), active: "orderedList" },
        { icon: AlignLeft, action: () => editor.chain().focus().setTextAlign('left').run(), active: { textAlign: 'left' } },
        { icon: AlignCenter, action: () => editor.chain().focus().setTextAlign('center').run(), active: { textAlign: 'center' } },
        { icon: AlignRight, action: () => editor.chain().focus().setTextAlign('right').run(), active: { textAlign: 'right' } },
        { icon: AlignJustify, action: () => editor.chain().focus().setTextAlign('justify').run(), active: { textAlign: 'justify' } },
        { icon: Quote, action: () => editor.chain().focus().toggleBlockquote().run(), active: "blockquote" },
        { icon: Code, action: () => editor.chain().focus().toggleCodeBlock().run(), active: "codeBlock" },
        { icon: Undo, action: () => editor.chain().focus().undo().run(), active: null },
        { icon: Redo, action: () => editor.chain().focus().redo().run(), active: null },
    ];

    return (
        <div className="flex flex-wrap gap-0.5 p-1 border-b border-white/5 bg-white/5 sticky top-0 z-10">
            {items.map((item, i) => (
                <button
                    key={i}
                    onClick={(e) => { e.preventDefault(); item.action(); }}
                    className={`p-1 rounded transition-colors hover:bg-white/10 ${item.active && editor.isActive(item.active) ? "bg-primary/20 text-primary" : "text-slate-400"}`}
                >
                    <item.icon size={14} />
                </button>
            ))}
        </div>
    );
};

export const TiptapField = ({ value, onChange }: TiptapFieldProps) => {
    const editor = useEditor({
        extensions: [
            StarterKit,
            TextAlign.configure({
                types: ['heading', 'paragraph'],
            }),
        ],
        content: value,
        onUpdate: ({ editor }) => {
            onChange(editor.getHTML());
        },
        immediatelyRender: false,
        editorProps: {
            attributes: {
                class: "prose prose-sm dark:prose-invert focus:outline-none min-h-[120px] p-2 max-w-full text-slate-200",
            },
        },
    });

    return (
        <div className="border border-white/10 rounded-lg overflow-hidden bg-slate-900/50 shadow-inner">
            <MenuBar editor={editor} />
            <div className="bg-transparent">
                <EditorContent editor={editor} />
            </div>
            <style dangerouslySetInnerHTML={{ __html: `
                .tiptap p.is-editor-empty:first-child::before {
                    color: #475569;
                    content: "Ketik konten di sini...";
                    float: left;
                    height: 0;
                    pointer-events: none;
                }
                .tiptap {
                    color: #e2e8f0;
                }
                .tiptap h1 { color: #f8fafc; font-size: 1.5rem; margin-bottom: 1rem; }
                .tiptap h2 { color: #f8fafc; font-size: 1.25rem; margin-bottom: 0.75rem; }
                .tiptap p { margin-bottom: 0.5rem; }
                .tiptap ul, .tiptap ol { padding-left: 1.5rem; margin-bottom: 1rem; }
                .tiptap li { margin-bottom: 0.25rem; }
                .tiptap blockquote { border-left: 3px solid #3b82f6; padding-left: 1rem; font-style: italic; color: #94a3b8; }
            `}} />
        </div>
    );
};
